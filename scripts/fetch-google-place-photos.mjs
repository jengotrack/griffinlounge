import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const envPath = path.join(root, ".env.local");
const outputPath = path.join(root, "public/assets/google-place-photos.json");
const query = "Griffin Lounge Southampton 35-37 Anglesea Road SO15 5QH";

await loadLocalEnv();

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  console.error("Missing GOOGLE_MAPS_API_KEY. Add it to .env.local or export it before running this script.");
  process.exit(1);
}

await mkdir(path.dirname(outputPath), { recursive: true });

const manifest = await fetchWithPlacesNew().catch(async (error) => {
  console.warn(`Places API (New) failed, trying legacy Places API: ${error.message}`);
  return fetchWithLegacyPlaces();
});

await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Wrote ${manifest.photos.length} Google photo records to ${outputPath}`);

async function fetchWithPlacesNew() {
  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount,places.photos",
    },
    body: JSON.stringify({ textQuery: query, maxResultCount: 5 }),
  });

  if (!response.ok) {
    throw new Error(`Text Search failed: ${response.status}`);
  }

  const json = await response.json();
  const places = json.places || [];
  const place =
    places.find((item) => /griffin lounge/i.test(item.displayName?.text || "")) ||
    places.find((item) => /35-37|Anglesea/i.test(item.formattedAddress || "")) ||
    places[0];

  if (!place) {
    throw new Error(`No Google Places result found for: ${query}`);
  }

  const photos = [];

  for (const photo of (place.photos || []).slice(0, 8)) {
    const mediaUrl = new URL(`https://places.googleapis.com/v1/${photo.name}/media`);
    mediaUrl.searchParams.set("maxWidthPx", "1400");
    mediaUrl.searchParams.set("skipHttpRedirect", "true");
    mediaUrl.searchParams.set("key", apiKey);

    const mediaResponse = await fetch(mediaUrl);
    if (!mediaResponse.ok) continue;

    const mediaJson = await mediaResponse.json();
    if (!mediaJson.photoUri) continue;

    photos.push({
      photoUri: mediaJson.photoUri,
      widthPx: photo.widthPx,
      heightPx: photo.heightPx,
      authorAttributions: photo.authorAttributions || [],
    });
  }

  return buildManifest("Google Places API Place Photos", {
    id: place.id,
    name: place.displayName?.text || "Griffin Lounge Southampton",
    formattedAddress: place.formattedAddress,
    rating: place.rating,
    userRatingCount: place.userRatingCount,
  }, photos);
}

async function fetchWithLegacyPlaces() {
  const searchUrl = new URL("https://maps.googleapis.com/maps/api/place/findplacefromtext/json");
  searchUrl.searchParams.set("input", query);
  searchUrl.searchParams.set("inputtype", "textquery");
  searchUrl.searchParams.set("fields", "place_id,name,formatted_address,rating,user_ratings_total,photos");
  searchUrl.searchParams.set("key", apiKey);

  const response = await fetch(searchUrl);
  const json = await response.json();

  if (json.status !== "OK" || !json.candidates?.length) {
    throw new Error(`Legacy Find Place failed: ${json.status || response.status}`);
  }

  const candidates = json.candidates.filter((candidate) =>
    /griffin/i.test(candidate.name || "") && /Anglesea|SO15 5QH/i.test(candidate.formatted_address || ""),
  );
  const places = candidates.length ? candidates : json.candidates;
  const primary = places.find((place) => /lounge/i.test(place.name || "")) || places[0];
  const photos = [];

  for (const place of places) {
    for (const photo of (place.photos || []).slice(0, 8)) {
      if (photos.length >= 12) break;
      const photoUri = await resolveLegacyPhotoUri(photo.photo_reference);
      if (!photoUri) continue;

      photos.push({
        photoUri,
        widthPx: photo.width,
        heightPx: photo.height,
        authorAttributions: (photo.html_attributions || []).map(parseHtmlAttribution),
        placeName: place.name,
      });
    }
  }

  return buildManifest("Google Places API Place Photos (legacy fallback)", {
    id: primary.place_id,
    name: primary.name,
    formattedAddress: primary.formatted_address,
    rating: primary.rating,
    userRatingCount: primary.user_ratings_total,
  }, photos);
}

async function resolveLegacyPhotoUri(photoReference) {
  if (!photoReference) return null;

  const photoUrl = new URL("https://maps.googleapis.com/maps/api/place/photo");
  photoUrl.searchParams.set("maxwidth", "1400");
  photoUrl.searchParams.set("photo_reference", photoReference);
  photoUrl.searchParams.set("key", apiKey);

  const response = await fetch(photoUrl, { redirect: "manual" });
  return response.headers.get("location");
}

function buildManifest(source, place, photos) {
  return {
    generatedAt: new Date().toISOString(),
    source,
    query,
    place,
    usageNotes: [
      "Photo URLs come from the Google Places API and should be refreshed regularly.",
      "Display authorAttributions wherever the related photo is shown.",
      "Do not store or publish the API key in client-side code.",
    ],
    photos,
  };
}

function parseHtmlAttribution(html = "") {
  const href = html.match(/href="([^"]+)"/)?.[1];
  const displayName = html.replace(/<[^>]+>/g, "").trim();
  return { displayName, uri: href };
}

async function loadLocalEnv() {
  let content = "";

  try {
    content = await readFile(envPath, "utf8");
  } catch {
    return;
  }

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;

    const [key, ...valueParts] = trimmed.split("=");
    if (!process.env[key]) {
      process.env[key] = valueParts.join("=").replace(/^["']|["']$/g, "");
    }
  }
}
