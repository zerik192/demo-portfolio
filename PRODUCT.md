# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/vanilla JS, no framework. Single-page, scrolling site. Chosen by the user for hosting simplicity and load speed. Deploy target: GitHub + Vercel or Netlify to a live URL.

## Users

Primary: hiring decision-makers and prospective clients evaluating a senior design hire or consulting engagement — design directors, heads of product, and CXO-level sponsors at enterprise companies. They arrive from a LinkedIn link, an email intro, or a referral, usually on a first pass that lasts under a minute, often on mobile, and are deciding whether this person is worth a conversation.

Secondary: recruiters and talent partners doing a fast credibility screen before forwarding the profile.

## Product Purpose

A one-page portfolio landing page for a UX/Visual Design lead with a consulting background (enterprise clients, CXO-level presentations). It exists to convert a cold or referred visitor into an inbound contact — an email, a resume download, or a LinkedIn follow — by making the case that this person designs strategically, not just attractively. Success = the visitor leaves able to say what this person does, what level they operate at, and why they should reach out, and a measurable share of qualified visitors take one of the three contact actions.

## Positioning

A design lead whose value is strategic judgment shown through the work itself — problem framing, role clarity, and outcomes made legible at a glance — not a gallery of polished screens or a skill-bar self-rating. The site's own craft (typography, hierarchy, spacing, restraint) is the proof of competence; near-zero animation is a deliberate signal of seniority and confidence.

## Operating Context

- Read fast, often on a phone, between other tabs. First scan is seconds, not minutes.
- Case studies are scanned before they are clicked: problem / role / outcome must be legible on the card without a click-through.
- The visitor may screenshot or forward a single section (proof strip, one case card) into an internal thread.
- Full case studies live behind the cards (separate pages or sections, built later).
- Contact is low-friction by design: mailto with prefilled subject, direct resume PDF download, LinkedIn.
- The section order is fixed and deliberate: Hero, Proof strip, Selected work, Key skills, Testimonials, About, Resume CTA + Contact, Footer.

## Capabilities and Constraints

- Single-page scrolling site; case study detail pages/routes are a later addition.
- Selected Work is built for exactly 3 case study cards — fewer, larger, more curated.
- Proof strip is built to support either a client/employer logo row or a single typographic credibility stat; which one ships is decided at the content pass.
- Key skills section presents capabilities + tools as structured text, explicitly NOT a skill-bar / proficiency-meter chart (reads junior).
- Testimonials: 2–3 quotes, each with name / role / company.
- About is a short philosophy paragraph, not a biography.
- Minimal to no animation. Any motion must respect prefers-reduced-motion.
- Fully responsive, mobile-first.
- Fast to load, simple to host (implied by the static stack choice).

## Brand Commitments

- No existing brand, logo, name, or visual identity supplied. Identity is a placeholder ("[YOUR NAME]", "[ROLE]", "[positioning statement]") for this build pass; real identity is committed at the content pass.
- Voice: direct, senior, low-hype. Strategic, not decorative.

## Evidence on Hand

None real yet. The user does NOT have final copy, headshot, resume PDF, case study details, or testimonials.

At the user's explicit request, the page now carries DRAFT copy written as a starting point (positioning statement, credibility stat, 3 case studies with invented clients and invented metrics, capabilities, tools, 3 testimonials, About, closing line). This is marked `data-draft="true"` in index.html and is NOT approved content — it is a script for the user to edit. It must not be treated as fact by any later pass, and every metric/client/quote in it is fictional. Truly-unknowable values (name, headshot, client logos, testimonial names, email, LinkedIn, résumé PDF, case-study URLs) remain hard `class="ph"` placeholders. Every content slot is still clearly labeled and easy to find. Real assets to be collected from the user before the content pass: headshot, resume PDF, 3 case studies (problem / role / outcome + full detail), 2–3 testimonials, proof-strip assets (logos or the stat), LinkedIn URL, contact email.

## Product Principles

1. The work carries the argument. Problem, role, and outcome are legible before any click; the site does not ask the visitor to trust a self-description.
2. Craft is the credential. Typography, hierarchy, spacing, and restraint do the persuading — not motion, not effects, not decoration.
3. Seniority reads as confidence and subtraction. No skill bars, no buzzword clouds, no life story, no animation for its own sake.
4. Low-friction conversion. The three contact actions (email, resume, LinkedIn) are always one obvious step away.
5. Honest placeholders over plausible fiction. Nothing on the page pretends to be real content until it is.

## Accessibility & Inclusion

Target WCAG 2.1 AA: sufficient color contrast, visible focus states, semantic landmarks and heading order, keyboard-operable interactive elements, and full prefers-reduced-motion support.
