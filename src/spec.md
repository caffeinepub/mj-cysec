# Specification

## Summary
**Goal:** Build a responsive, English-language marketing website for “MJ CySec” with core pages, strong calls-to-action, and a contact form that persists submissions in a Motoko canister.

**Planned changes:**
- Create responsive marketing site structure with navigation to Home, Services, About, and Contact.
- Write polished, consistently branded English copy including a clear homepage value proposition and prominent CTA.
- Implement Services with at least 3 offerings (each with a short description and icon).
- Implement About with company overview and mission statement.
- Implement Contact page with form (name, email, optional company, message), client-side validation, and success/error UI states.
- Add backend Motoko methods to store timestamped contact submissions and query/list submissions.
- Apply a cohesive cybersecurity-appropriate design system (avoiding default blue/purple), including consistent typography, spacing, components, and accessible hover/focus states.
- Add basic SEO/social metadata (title, description, OpenGraph/Twitter) including “MJ CySec”.
- Add and reference generated static brand assets under `frontend/public/assets/generated` (logo, hero visual, service icons) in the layout.

**User-visible outcome:** Visitors can browse a polished MJ CySec marketing site on any device, learn about services and the company, and submit the contact form with clear feedback that the message was received (or if it failed).
