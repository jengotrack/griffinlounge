const business = {
  name: "Griffin Lounge",
  address: "35-37 Anglesea Road, Southampton, SO15 5QH",
  phone: "+44 7404 712153",
  phoneHref: "tel:+447404712153",
  email: "info@thegriffinlounge.uk",
  emailHref: "mailto:peter@thegriffinlounge.uk",
  menuUrl:
    "https://www.canva.com/design/DAGX2Xt-lC8/QvRze50zE7vVHdoFohHYIg/view?utm_content=DAGX2Xt-lC8&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  whatsapp:
    "https://wa.me/447404712153?text=Hi%20Griffin%20Lounge%2C%20I%20am%20reviewing%20the%20website%20concepts%20and%20my%20feedback%20is%3A",
};

const assets = {
  logo: "/assets/legacy/02-griffin-bar-transparent-logo-A0xwVqXKeoIr6PrJ.png",
  smallLogo: "/assets/legacy/03-griffin-bar-transparent-logo-A0xwVqXKeoIr6PrJ.png",
  hero: "/assets/legacy/01-griffin-lounge-header-1-Yyv37GqaeRu3XwRD.png",
  foodA: "/assets/WhatsApp%20Image%202026-06-08%20at%2018.35.03.jpeg",
  foodB: "/assets/legacy/10-griffin-lounge-space-YZ9VbPlJoDfzekO6.jpeg",
  venue: "/assets/legacy/12-griffin-lounge-banner-2-dWxybPvZa4Tn1b8O.jpg",
  seating: "/assets/legacy/10-griffin-lounge-space-YZ9VbPlJoDfzekO6.jpeg",
  drinks: "/assets/legacy/20-griffin-drinks-A85w4a9x7BtV2yk5.jpg",
  atmosphere: "/assets/legacy/19-griffin-image-A85w43rWppfWGw4l.jpg",
  egusiSpecial: "/assets/WhatsApp%20Image%202026-06-08%20at%2018.35.03.jpeg",
  venueReel: "/assets/WhatsApp%20Video%202026-06-29%20at%2021.39.00.mp4",
  eventKegite: "/assets/WhatsApp%20Image%202026-05-24%20at%2009.50.39.jpeg",
  eventBand: "/assets/WhatsApp%20Image%202026-06-18%20at%2011.32.04.jpeg",
  eventFriday: "/assets/WhatsApp%20Image%202026-07-10%20at%2011.18.28.jpeg",
  eventSports: "/assets/WhatsApp%20Image%202026-07-04%20at%2013.57.29.jpeg",
};

const hours = [
  ["Monday", "5:00 PM - 11:00 PM"],
  ["Tuesday - Thursday", "3:00 PM - 11:00 PM"],
  ["Friday - Saturday", "12:00 PM - 1:30 AM"],
  ["Sunday", "12:00 PM - 11:00 PM"],
  ["Happy hour", "Mon 5:00 PM - 6:00 PM, Tue-Thu 3:00 PM - 6:00 PM"],
  ["Kitchen", "Closes 10 PM daily"],
];

const menuHighlights = [
  ["Pepper Soup", "Goat meat, assorted meat and mixed meat pepper soups cooked with herbs and spices."],
  ["Soups and Swallows", "Egusi, Oha, Efo Riro, Bitter Leaf, Amala with Ewedu and Gbegiri, Garri and Poundo."],
  ["Rice Dishes", "Jollof rice, fried rice, white rice and stew, served as main meals with beef or chicken."],
  ["Grills and Favourites", "Suya, whole grilled fish, Nkwobi, Gizdodo, peppered snail and peppered meat."],
  ["Everyday Comforts", "Burgers, wraps, pizza, pasta, fish and chips, salads and chicken wings."],
  ["Kids and Sides", "Kids' pasta, burgers, pizza, puff puff, plantain, yam chips, fries and swallows."],
];

const featuredDishes = ["Jollof Rice", "Egusi", "Efo Riro", "Suya", "Whole Grilled Fish", "Goat Meat Pepper Soup", "Gizdodo", "Nkwobi"];

const orderingBadges = [
  {
    label: "Call to Order",
    variant: "is-direct",
    icon: `<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z"/>`,
  },
  {
    label: "Food Menu",
    icon: `<path d="M4 3h16v18H4z"/><path d="M8 7h8M8 11h8M8 15h5"/>`,
  },
  {
    label: "Just Eat",
    icon: `<path d="M6 7h12l-1 12H7z"/><path d="M9 7a3 3 0 0 1 6 0"/>`,
  },
  {
    label: "Uber Eats",
    icon: `<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>`,
  },
  {
    label: "Deliveroo",
    icon: `<path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>`,
  },
];

const whatsOnHighlights = [
  {
    title: "Friday Night Live",
    label: "Music",
    text: "A regular live-night energy for food, drinks, DJs and a room that feels warm after dark.",
    image: assets.eventFriday,
  },
  {
    title: "Live sports",
    label: "Screens",
    text: "Football screenings give groups a reason to gather before or after a meal.",
    image: assets.eventSports,
  },
  {
    title: "Community nights",
    label: "Culture",
    text: "Afrobeats, live bands, meetups and cultural nights keep Griffin rooted in its community.",
    image: assets.eventBand,
  },
];

const reviewHighlights = [
  {
    metric: "4.6",
    label: "Google rating",
    title: "Griffin Lounge Southampton",
    text: "Guests rate Griffin Lounge highly for its welcoming service, food and relaxed Southampton atmosphere.",
  },
  {
    metric: "145",
    label: "Guest reviews",
    title: "Warm local welcome",
    text: "Visitors talk about friendly staff, good value and a place that feels easy to settle into.",
  },
  {
    metric: "Food",
    label: "Guest favourite",
    title: "Food with atmosphere",
    text: "Come for Nigerian dishes, grills and comfort plates, then stay for drinks, music or a relaxed evening with friends.",
  },
];

const concepts = [
  {
    slug: "restaurant-first",
    label: "Concept 1",
    number: "01",
    title: "Restaurant First",
    theme: "restaurant-first",
    headline: "Authentic Nigerian food in Southampton.",
    deck:
      "Freshly prepared Nigerian favourites, grills and comforting classics in a relaxed lounge setting.",
    strategy:
      "This direction makes the restaurant offer unmistakable from the first screen. It leads with Nigerian classics, collection, delivery, table bookings and food-first trust signals, then moves events and nightlife further down as added value.",
    priorities: ["Nigerian classics", "Grills", "Collection", "Delivery", "Table bookings", "Reviews"],
    heroImage: assets.foodA,
    sections: ["menu", "specials", "ordering", "booking", "reviews", "atmosphere", "events", "contact"],
  },
  {
    slug: "food-and-social",
    label: "Concept 2",
    number: "02",
    title: "Food and Social",
    theme: "food-social",
    headline: "Authentic Nigerian food, drinks and good times.",
    deck: "From jollof rice, egusi and suya to grilled fish, burgers and cocktails, Griffin brings great food and a lively atmosphere together.",
    strategy:
      "This direction keeps the current social energy while making the food offer specific. It works if Griffin wants to be chosen for dinner, drinks, weekend entertainment and group celebrations without sounding like a nightclub first.",
    priorities: ["Nigerian food", "Cocktails", "Restaurant atmosphere", "Live entertainment", "Events"],
    heroImage: assets.hero,
    sections: ["atmosphere", "menu", "specials", "reviews", "ordering", "drinks", "events", "games", "contact"],
  },
  {
    slug: "premium-dining",
    label: "Concept 3",
    number: "03",
    title: "Premium Nigerian Dining",
    theme: "premium-dining",
    headline: "A soulful Nigerian dining room with evening energy.",
    deck:
      "A more spacious restaurant-led direction for Nigerian dishes, grills, delivery favourites and relaxed evenings in Southampton.",
    strategy:
      "This direction is the strongest repositioning. It uses editorial spacing and a premium menu presentation to make Nigerian dining feel intentional, while still keeping collection, delivery, drinks and private hire easy to find.",
    priorities: ["Nigerian dining", "Signature dishes", "Premium menu", "Delivery", "Private hire"],
    heroImage: assets.foodB,
    sections: ["story", "premiumMenu", "specials", "reviews", "ordering", "booking", "atmosphere", "contact"],
  },
];

const conceptBySlug = Object.fromEntries(concepts.map((concept) => [concept.slug, concept]));
const currentPath = window.location.pathname.replace(/\/$/, "") || "/";

if (currentPath === "/concepts" || currentPath.startsWith("/concepts/")) {
  renderConceptExperience();
}

setupNavigation();
hydrateGooglePhotos();

function setupNavigation() {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = header?.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
}

function renderConceptExperience() {
  document.title = "Griffin Lounge Concepts | Private Review";
  const slug = currentPath.replace("/concepts/", "");
  const selectedConcept = conceptBySlug[slug];

  document.body.innerHTML = `
    <header class="site-header concept-header" data-header>
      <a class="brand" href="/concepts" aria-label="Back to Griffin Lounge concepts">
        <img src="${assets.logo}" alt="The Griffin Lounge" />
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span>
        <span></span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Concept navigation">
        <a href="/concepts">All Concepts</a>
        ${concepts.map((concept) => `<a href="/concepts/${concept.slug}">${concept.title}</a>`).join("")}
        <a href="${business.whatsapp}" target="_blank" rel="noreferrer">WhatsApp Feedback</a>
      </nav>
    </header>
    <main id="top" class="concept-shell">
      ${selectedConcept ? renderConceptDetail(selectedConcept) : renderConceptIndex()}
    </main>
    <footer class="site-footer">
      <img src="${assets.smallLogo}" alt="The Griffin Lounge" />
      <p>${business.name} concept review</p>
      <p>${business.address}</p>
      <small>Private direction review. Concepts may be combined before the final homepage is completed.</small>
    </footer>
  `;
}

function renderConceptIndex() {
  return `
    <section class="concept-index-hero">
      <p class="eyebrow">Private concept review</p>
      <h1>Three homepage directions for Griffin Lounge.</h1>
      <p>
        These concepts use the same verified business facts and current website assets. They are for reviewing direction, hierarchy and tone rather than final copy, photography or menu content.
      </p>
      <div class="review-note">
        <strong>Review note:</strong> the final homepage can combine parts of multiple concepts. Pick the direction, sections and energy that feel right for the business.
      </div>
    </section>
    <section class="concept-card-grid" aria-label="Homepage concept directions">
      ${concepts.map(renderConceptCard).join("")}
    </section>
  `;
}

function renderConceptCard(concept) {
  return `
    <article class="concept-card ${concept.theme}" style="--card-number: '${concept.number}'">
      <img src="${concept.heroImage}" alt="${concept.title} concept preview" />
      <div>
        <p class="eyebrow">${concept.label} / Direction</p>
        <h2>${concept.title}</h2>
        <p>${concept.deck}</p>
        <ul>${concept.priorities.map((priority) => `<li>${priority}</li>`).join("")}</ul>
        <a class="button primary" href="/concepts/${concept.slug}">Review Direction</a>
      </div>
    </article>
  `;
}

function renderConceptDetail(concept) {
  return `
    <article class="concept-detail ${concept.theme}">
      <section class="concept-hero">
        <div class="concept-hero-copy">
          <a class="back-link" href="/concepts">Back to all concepts</a>
          <p class="eyebrow">${concept.label} / ${concept.title}</p>
          <h1>${concept.headline}</h1>
          <p>${concept.deck}</p>
          <div class="hero-actions">
            <a class="button primary" href="${business.phoneHref}">Call to Order</a>
            <a class="button secondary" href="${business.whatsapp}" target="_blank" rel="noreferrer">WhatsApp Feedback</a>
          </div>
        </div>
        <div class="concept-hero-image">
          <img src="${concept.heroImage}" alt="${concept.title} homepage direction" />
        </div>
      </section>
      <section class="strategy-panel">
        <div>
          <p class="eyebrow">Strategy</p>
          <h2>Why this direction works</h2>
        </div>
        <p>${concept.strategy}</p>
      </section>
      ${concept.sections.map((section) => renderConceptSection(section, concept)).join("")}
      ${renderLaunchContentPanel()}
      ${renderVerifiedDetails()}
    </article>
  `;
}

function renderConceptSection(section, concept) {
  const sectionMap = {
    menu: `
      <section class="concept-section menu-showcase">
        <div>
          <p class="eyebrow">Nigerian food</p>
          <h2>Explore a menu with real Nigerian depth.</h2>
          <p>Lead with the dishes that make Griffin distinctive: jollof rice, egusi, efo riro, suya, pepper soup, whole grilled fish, Gizdodo, Nkwobi and family-friendly favourites.</p>
          <a class="button primary" href="${business.menuUrl}" target="_blank" rel="noreferrer">View Current Food Menu</a>
        </div>
        <div class="menu-visuals">
          <img src="${assets.foodA}" alt="Egusi special at Griffin Lounge" />
          <article class="menu-feature-card" aria-label="Popular Griffin Lounge dishes">
            <span>Order favourites</span>
            <h3>Jollof, egusi, suya, pepper soup and grilled fish.</h3>
            <p>Dine in, collect from Anglesea Road or order for delivery where available.</p>
          </article>
        </div>
      </section>
      <section class="concept-section menu-category-board">
        <p class="eyebrow">Menu categories</p>
        <h2>From soups and swallows to grills, rice dishes and kids' meals.</h2>
        <div class="menu-category-grid">
          ${menuHighlights.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </section>
      <section class="concept-section favourite-strip">
        <p class="eyebrow">Griffin favourites</p>
        <h2>Give visitors something delicious to choose from straight away.</h2>
        <div>${featuredDishes.map((dish) => `<span>${dish}</span>`).join("")}</div>
      </section>
    `,
    premiumMenu: `
      <section class="concept-section premium-menu-block">
        <p class="eyebrow">Menu presentation</p>
        <h2>Present Nigerian dishes with the confidence of a restaurant.</h2>
        <div class="premium-menu-grid">
          <article><span>01</span><h3>Native dishes</h3><p>Egusi, Oha, Efo Riro, Bitter Leaf, Amala with Ewedu and Gbegiri, Garri and Poundo.</p></article>
          <article><span>02</span><h3>Grills and spice</h3><p>Suya, whole grilled fish, Nkwobi, peppered snail, peppered meat and pepper soups.</p></article>
          <article><span>03</span><h3>Comfort plates</h3><p>Jollof rice, fried rice, burgers, wraps, pasta, pizza, fish and chips, kids' meals and sides.</p></article>
        </div>
      </section>
    `,
    specials: `
      <section class="concept-section special-feature">
        <div class="special-feature-copy">
          <p class="eyebrow">Specials and favourites</p>
          <h2>Order the dishes people come back for.</h2>
          <p>From rich egusi and soft swallows to jollof, suya and pepper soup, Griffin is made for proper food, generous portions and plates worth sharing.</p>
          <div class="special-tags">
            <span>Egusi</span>
            <span>Swallows</span>
            <span>Jollof</span>
            <span>Suya</span>
          </div>
        </div>
        <figure class="special-card">
          <img src="${assets.egusiSpecial}" alt="Griffin Lounge Egusi special artwork" />
          <figcaption>
            <strong>Egusi Special</strong>
            <span>A rich, comforting favourite for dine-in, collection or delivery.</span>
          </figcaption>
        </figure>
      </section>
    `,
    ordering: `
      <section class="concept-section order-panel">
        <div>
          <p class="eyebrow">Delivery and collection</p>
          <h2>Griffin delivered, collected or served at your table.</h2>
          <p>Call us to order, collect from Anglesea Road, or look out for Griffin Lounge on your favourite delivery app.</p>
        </div>
        <div class="order-actions concept-orders">
          ${renderOrderingBadges()}
        </div>
      </section>
    `,
    booking: `
      <section class="concept-section split-mini">
        <div>
          <p class="eyebrow">Bookings</p>
          <h2>Book for food first, then stay for the atmosphere.</h2>
          <p>Promote table bookings for relaxed meals, group dinners, drinks and private celebrations from the first half of the homepage.</p>
        </div>
        <img src="${assets.seating}" alt="Griffin Lounge seating area" />
      </section>
    `,
    reviews: `
      <section class="concept-section reviews-panel">
        <p class="eyebrow">Reviews</p>
        <h2>Loved for food, service and a warm welcome.</h2>
        <p>Guests visit Griffin Lounge for Nigerian food, friendly service, good value and the easy Southampton lounge atmosphere.</p>
        <div class="review-grid">
          ${reviewHighlights
            .map(
              (review) => `
                <article>
                  <span>${review.metric}</span>
                  <small>${review.label}</small>
                  <strong>${review.title}</strong>
                  <p>${review.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
        <div class="google-photo-panel" data-google-photos></div>
      </section>
    `,
    atmosphere: `
      <section class="concept-section split-mini">
        ${
          concept.theme === "food-social"
            ? `<video class="atmosphere-video" src="${assets.venueReel}" autoplay muted loop playsinline poster="${assets.atmosphere}" aria-label="Griffin Lounge atmosphere video"></video>`
            : `<img src="${concept.theme === "premium-dining" ? assets.venue : assets.atmosphere}" alt="Griffin Lounge atmosphere" />`
        }
        <div>
          <p class="eyebrow">Atmosphere</p>
          <h2>${concept.theme === "premium-dining" ? "A warm dining room for proper Nigerian food." : "A place to eat, meet and stay longer."}</h2>
          <p>Settle in for Nigerian food, grilled favourites, cocktails, music and celebrations in a relaxed lounge setting.</p>
        </div>
      </section>
    `,
    drinks: `
      <section class="concept-section split-mini">
        <div>
          <p class="eyebrow">Cocktails and drinks</p>
          <h2>Give the bar a clear supporting role.</h2>
          <p>Drinks and happy hour add energy to the food offer and make the venue feel social after the meal.</p>
        </div>
        <img src="${assets.drinks}" alt="Drinks at Griffin Lounge" />
      </section>
    `,
    events: `
      <section class="concept-section event-lane whats-on-section">
        <div>
          <p class="eyebrow">What is on</p>
          <h2>${concept.theme === "restaurant-first" ? "Dinner first, then the night opens up." : "Live entertainment, drinks and late-night energy."}</h2>
          <p>After dinner, Griffin keeps the evening going with sports screenings, live music, DJs, cultural nights and community events.</p>
        </div>
        <div class="whatson-mini-grid">
          ${whatsOnHighlights
            .map(
              (event) => `
                <article>
                  <img src="${event.image}" alt="${event.title} event artwork" />
                  <span>${event.label}</span>
                  <h3>${event.title}</h3>
                  <p>${event.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `,
    games: `
      <section class="concept-section games-strip">
        <h2>Pool, darts and venue hire round out the social offer.</h2>
        <ul class="feature-list">
          <li>Function room for hire</li>
          <li>Pool table and darts</li>
          <li>Wheelchair accessibility</li>
          <li>Great environment for groups</li>
        </ul>
      </section>
    `,
    story: `
      <section class="concept-section story-block">
        <p class="eyebrow">Restaurant story</p>
        <h2>A calmer introduction to Nigerian dining in Southampton.</h2>
        <p>Tell the story through the food: pepper soup spices, soups and swallows, jollof, grills, smoky suya and dishes made for sharing.</p>
      </section>
    `,
    contact: `
      <section class="concept-section concept-contact">
        <div>
          <p class="eyebrow">Contact and feedback</p>
          <h2>Book a table, order food or ask about your next event.</h2>
          <p>${business.address}</p>
        </div>
        <div class="contact-actions">
          <a href="${business.phoneHref}">${business.phone}</a>
          <a href="${business.emailHref}">${business.email}</a>
          <a href="${business.whatsapp}" target="_blank" rel="noreferrer">WhatsApp Feedback</a>
        </div>
      </section>
    `,
  };

  return sectionMap[section] || "";
}

function renderOrderingBadges() {
  return orderingBadges
    .map(
      (item) => `
        <span class="order-badge ${item.variant || ""}">
          <svg viewBox="0 0 24 24" aria-hidden="true">${item.icon}</svg>
          ${item.label}
        </span>
      `,
    )
    .join("");
}

async function hydrateGooglePhotos() {
  const panels = document.querySelectorAll("[data-google-photos]");
  if (!panels.length) return;

  try {
    const response = await fetch("/assets/google-place-photos.json", { cache: "no-store" });
    if (!response.ok) return;

    const manifest = await response.json();
    const photos = Array.isArray(manifest.photos) ? manifest.photos.filter((photo) => photo.photoUri).slice(0, 6) : [];
    if (!photos.length) return;

    panels.forEach((panel) => {
      panel.innerHTML = `
        <div class="google-photo-heading">
          <p class="eyebrow">Guest photos</p>
          <h3>Seen on Google</h3>
          <p>${manifest.place?.name || "Griffin Lounge Southampton"}${manifest.place?.rating ? ` · ${manifest.place.rating} Google rating` : ""}</p>
        </div>
        <div class="google-photo-grid">
          ${photos
            .map(
              (photo, index) => `
                <figure>
                  <img src="${photo.photoUri}" alt="Google guest photo of Griffin Lounge ${index + 1}" />
                  ${renderPhotoAttribution(photo.authorAttributions, index)}
                </figure>
              `,
            )
            .join("")}
        </div>
      `;
      panel.hidden = false;
    });
  } catch {
    panels.forEach((panel) => {
      panel.hidden = true;
    });
  }
}

function renderPhotoAttribution(attributions = [], index = 0) {
  if (!attributions.length) return "";
  const label = index === 0 ? "Google photo attribution" : "Google contributor";

  return `
    <figcaption aria-label="Google photo attribution">
      <span>${label}</span>
      ${attributions
        .map((item) =>
          item.uri
            ? `<a href="${item.uri}" target="_blank" rel="noreferrer">${item.displayName || "Contributor"}</a>`
            : `<span>${item.displayName || "Google contributor"}</span>`,
        )
        .join(", ")}
    </figcaption>
  `;
}

function renderLaunchContentPanel() {
  return `
    <section class="concept-section launch-content-panel">
      <p class="eyebrow">At a glance</p>
      <h2>Everything you need for food, drinks and a good night out.</h2>
      <ul>
        <li>Authentic Nigerian food and freshly prepared grills.</li>
        <li>Jollof rice, egusi, efo riro, suya, pepper soup and whole grilled fish.</li>
        <li>Dine in, order for collection or choose delivery where available.</li>
        <li>Cocktails, music, pool, darts, events and private hire.</li>
      </ul>
    </section>
  `;
}

function renderVerifiedDetails() {
  return `
    <section class="concept-section verified-details">
      <div>
        <p class="eyebrow">Verified business details</p>
        <h2>Same facts across every concept</h2>
        <p>${business.address}</p>
        <p>${business.phone} / ${business.email}</p>
      </div>
      <dl class="hours-grid">
        ${hours.map(([day, time]) => `<div><dt>${day}</dt><dd>${time}</dd></div>`).join("")}
      </dl>
    </section>
  `;
}
