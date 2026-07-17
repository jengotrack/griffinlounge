# Griffin Lounge Website Rebuild - Codex Implementation Brief

## Objective

Recreate the current Griffin Lounge website as a clean, maintainable first draft, using the existing website as the visual and content baseline, while repositioning the business so that:

1. Restaurant dining is the primary focus
2. Food delivery is highly visible
3. Nightlife, events, pool, darts, drinks and venue hire remain important secondary offerings

Current website:

- https://thegriffinlounge.uk/
- Address: 35-37 Anglesea Road, Southampton, SO15 5QH
- Phone: +44 7404 712153
- Email currently displayed: info@thegriffinlounge.uk
- Existing mail link appears to point to: peter@thegriffinlounge.uk
- Facebook: https://www.facebook.com/griffinbarandgrill
- Instagram: https://www.instagram.com/griffinloungesouthampton/
- Current food menu: Canva-hosted menu link on the existing page

The site owner has authorised us to recreate the website and reuse the current website assets.

## Phase 1 - Inspect and Download Existing Assets

Inspect the current page and identify all assets used by the site:

- Images
- Logos
- Background images
- Icons
- Fonts
- Stylesheets
- JavaScript bundles
- Favicons
- Social preview images
- Menu links
- Event artwork
- Contact information
- Metadata
- Any embedded third-party resources

Requirements:

- Download only assets directly used by the Griffin Lounge website.
- Preserve original filenames where practical.
- Record the original source URL for every asset.
- Do not hotlink production assets in the rebuilt version.
- Store downloaded assets locally in the project.
- Avoid downloading analytics, trackers, unrelated third-party scripts or framework internals unless required.

Suggested asset structure:

```text
public/
  assets/
    branding/
    food/
    drinks/
    venue/
    events/
    backgrounds/
    icons/
    legacy/
```

## Concept Review Experience

Before completing the final homepage, create a private concept-comparison experience.

Routes:

- `/concepts`
- `/concepts/restaurant-first`
- `/concepts/food-and-social`
- `/concepts/premium-dining`

The `/concepts` page must show three visually clear homepage directions using the same business facts and content.

### Concept 1: Restaurant First

Prioritise:

- Nigerian food
- Signature dishes
- Delivery
- Collection
- Table bookings
- Reviews

Move nightlife and events further down the page.

### Concept 2: Food and Social

Balance:

- Food
- Cocktails
- Restaurant atmosphere
- Live entertainment
- Events

### Concept 3: Premium Nigerian Dining

Use a more refined restaurant-led visual direction with:

- Generous spacing
- Restrained gold accents
- Large food imagery
- Restaurant storytelling
- Premium menu presentation

Do not build three separate applications. Reuse shared components, content and data while varying layout, styling and section priority.

Each concept must:

- Be responsive
- Include desktop and mobile navigation
- Use the same verified business details
- Avoid customer-facing dead-end copy such as "content unavailable"; use credible draft content from the menu, reviews, venue facts and business positioning, while keeping source/accuracy notes internal where needed
- Include a link back to `/concepts`
- Include a WhatsApp feedback CTA
- Include a short explanation of the strategy behind the concept

The review page should remind reviewers that the concepts can be combined and that they are reviewing direction rather than final content.
