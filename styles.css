/* ========================================================================
   Vimeo clone — IA2 Project 1 (M0615)
   Vanilla CSS3 — mobile-first, responsive at 1024px
======================================================================== */

:root {
  --bg: #ffffff;
  --fg: #0b0d10;
  --muted: #5b6473;
  --border: #e5e7eb;
  --secondary: #f3f4f6;
  --brand: #ffffff;
  --brand-fg: #0b0d10;
  --dark: #14171c;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --container: 1200px;
  --header-h: 64px;
  --font: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
          "Helvetica Neue", Arial, sans-serif;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: var(--font);
  color: var(--fg);
  background: var(--bg);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, video { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }
ul { list-style: none; padding: 0; margin: 0; }
h1, h2, h3, h4 { margin: 0; line-height: 1.1; }
p { margin: 0; }

.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: 16px;
}
.center { text-align: center; }
.muted { color: var(--muted); font-size: 0.875rem; font-weight: 500; }
.narrow { max-width: 720px; }
.lead { color: var(--muted); font-size: 1rem; margin-top: 20px; }
.display {
  font-size: clamp(2.25rem, 5vw + 1rem, 4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}
.btn-brand { background: var(--brand); color: var(--brand-fg); }
.btn-brand:hover { background: #f0f0f0; }
.btn-ghost { background: transparent; color: var(--fg); }
.btn-ghost:hover { background: var(--secondary); }
.btn-light { background: #fff; color: var(--fg); }
.btn-light:hover { background: rgba(255,255,255,0.9); }
.btn-dark { background: var(--fg); color: var(--bg); }
.btn-dark:hover { background: #1f2937; }
.btn-sm { padding: 8px 16px; font-size: 0.875rem; }
.arrow { transition: transform 0.2s ease; }
.btn:hover .arrow { transform: translateX(3px); }

/* ---------- Header ---------- */
.site-header {
  position: sticky; top: 0; z-index: 40;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
}
.header-left { display: flex; align-items: center; gap: 32px; }
.logo {
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}
.primary-nav { display: none; align-items: center; gap: 4px; }
.nav-link {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 8px 12px; border-radius: 999px;
  font-size: 0.875rem; font-weight: 500;
  color: var(--fg);
}
.nav-link:hover { background: var(--secondary); }
.header-right { display: none; align-items: center; gap: 8px; }
.icon-btn { padding: 8px; border-radius: 999px; color: var(--fg); }
.icon-btn:hover { background: var(--secondary); }
.hamburger { padding: 8px; border-radius: 999px; }
.hamburger:hover { background: var(--secondary); }
.hamburger .icon-close { display: none; }
.hamburger.is-open .icon-open { display: none; }
.hamburger.is-open .icon-close { display: block; }

.mobile-nav {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
  background: var(--bg);
  padding: 8px 16px;
  animation: fadeUp 0.25s ease;
}
.mobile-nav a {
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
  font-weight: 500;
}
.mobile-nav a:last-of-type { border-bottom: 0; }
.mobile-nav-actions { display: flex; gap: 8px; padding-top: 16px; }
.mobile-nav-actions .btn { flex: 1; justify-content: center; }

/* ---------- Hero ---------- */
.hero { padding-top: 24px; }
.hero-frame {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
}
.hero-video {
  width: 100%; height: 520px;
  object-fit: cover;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1), transparent);
}
.hero-content {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 24px; text-align: center;
  color: #fff;
  animation: fadeUp 0.7s ease;
}
.eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.2em; opacity: 0.9; }
.hero-title { font-size: clamp(2.5rem, 7vw, 4.5rem); font-weight: 900; line-height: 0.95; margin-top: 16px; }
.hero-desc { max-width: 28rem; margin: 20px auto 0; font-size: 1rem; color: rgba(255,255,255,0.9); }
.hero-cta { margin-top: 28px; display: flex; justify-content: center; }

.float-cta {
  position: absolute; right: 16px; bottom: 16px;
  display: none;
  align-items: center; gap: 12px;
  background: rgba(255,255,255,0.95);
  color: var(--fg);
  padding: 12px 20px 12px 12px;
  border-radius: var(--radius-md);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  backdrop-filter: blur(6px);
  font-size: 0.875rem; font-weight: 500;
  line-height: 1.2;
}
.float-play {
  display: grid; place-items: center;
  width: 40px; height: 40px; border-radius: 999px;
  background: var(--brand); color: var(--brand-fg);
}

/* ---------- Trusted ---------- */
.trusted { padding: 64px 0; }
.marquee-wrap { margin-top: 32px; overflow: hidden; }
.marquee {
  display: flex; gap: 64px; padding-inline: 32px;
  width: max-content;
  opacity: 0.7;
  animation: scroll 30s linear infinite;
}
.marquee span {
  white-space: nowrap;
  font-size: 1.5rem; font-weight: 700;
  letter-spacing: -0.02em;
  color: rgba(11,13,16,0.7);
}
@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ---------- Built for how you work ---------- */
.builtfor {
  position: relative;
  background: rgba(243,244,246,0.4);
  padding: 80px 16px;
  overflow: hidden;
}
.builtfor .container { position: relative; }
.builtfor .lead { max-width: 36rem; margin-left: auto; margin-right: auto; font-size: 1.05rem; }
.builtfor .btn { margin-top: 32px; }
.blob {
  position: absolute; width: 18rem; height: 18rem;
  border-radius: 999px; filter: blur(80px);
  pointer-events: none; opacity: 0;
}
.blob-1 { top: 40px; left: 25%; background: rgba(0,173,239,0.2); }
.blob-2 { bottom: 40px; right: 25%; background: rgba(0,173,239,0.1); }

/* ---------- Dark section / Platform ---------- */
.dark-section {
  background: var(--dark);
  color: #fff;
  padding: 80px 16px;
}
.dark-section .display { color: #fff; }
.platform-grid {
  margin-top: 64px;
  display: grid; grid-template-columns: 1fr; gap: 40px;
}
.platform-card { display: flex; flex-direction: column; gap: 16px; }
.card-video {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--radius-sm);
  background: #000;
}
.card-video video { width: 100%; height: 100%; object-fit: cover; }
.platform-card h3 { font-size: 1.25rem; font-weight: 700; }
.platform-card p { font-size: 0.9rem; color: rgba(255,255,255,0.7); line-height: 1.55; }
.pill-link {
  margin-top: auto; align-self: flex-start;
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 8px 16px; border-radius: 999px;
  font-size: 0.875rem; font-weight: 600;
  transition: background-color 0.2s ease;
}
.pill-link:hover { background: rgba(255,255,255,0.1); }

/* ---------- Personas ---------- */
.personas { padding: 80px 0; }
.narrow-block { max-width: 720px; }
.narrow-block .btn { margin-top: 32px; }
.personas-grid {
  margin-top: 64px;
  display: grid; grid-template-columns: 1fr; gap: 48px;
}
.cole-card {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: #d6d3d1;
}
.cole-card img { width: 100%; height: 100%; object-fit: cover; }
.cole-pill {
  position: absolute; left: 16px; right: 16px; bottom: 16px;
  display: flex; align-items: center; gap: 12px;
  background: rgba(255,255,255,0.95);
  padding: 12px;
  border-radius: var(--radius-sm);
  backdrop-filter: blur(8px);
}
.cole-badge {
  display: grid; place-items: center;
  width: 40px; height: 40px; border-radius: 999px;
  background: var(--fg); color: var(--bg);
  font-size: 0.7rem; font-weight: 700;
}
.cole-text { flex: 1; min-width: 0; color: var(--fg); }
.cole-name { font-size: 0.875rem; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cole-sub { font-size: 0.75rem; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.play-btn {
  display: grid; place-items: center;
  width: 40px; height: 40px; border-radius: 999px;
  background: var(--brand); color: var(--brand-fg); flex-shrink: 0;
}

.persona-list { display: flex; flex-direction: column; gap: 32px; }
.persona-list li { display: flex; gap: 16px; }
.persona-icon {
  display: grid; place-items: center;
  width: 32px; height: 32px; border-radius: 6px;
  font-size: 1.25rem; flex-shrink: 0;
}
.persona-list h3 { font-size: 1rem; font-weight: 700; }
.persona-list h3 a:hover { color: var(--brand); }
.persona-list p { font-size: 0.875rem; color: var(--muted); margin-top: 8px; }

/* ---------- AI section ---------- */
.ai-section .container { display: grid; grid-template-columns: 1fr; gap: 48px; }
.ai-spark { color: var(--brand); margin-right: 8px; }
.accordion {
  margin-top: 40px;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.ai-item {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  font-weight: 700; text-align: left;
  color: #fff;
  transition: color 0.2s ease;
}
.ai-item:last-child { border-bottom: 0; }
.ai-item:hover { color: var(--brand); }
.ai-item.active { color: var(--brand); }
.ai-toggle { font-size: 1.5rem; font-weight: 300; }

.seo-card {
  margin-top: 32px;
  background: rgba(255,255,255,0.05);
  padding: 24px; border-radius: var(--radius-md);
}
.gradient-text {
  font-size: 1rem; font-weight: 700;
  color: var(--fg);
}
.seo-card p { margin-top: 12px; font-size: 0.875rem; color: rgba(255,255,255,0.7); }
.seo-card .btn { margin-top: 20px; }

.ai-video-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: #000;
  aspect-ratio: 4 / 3;
}
.ai-video-wrap video { width: 100%; height: 100%; object-fit: cover; }

/* ---------- Enterprise ---------- */
.enterprise { padding: 80px 0; }
.ent-grid { display: grid; grid-template-columns: 1fr; gap: 48px; }
.ent-grid .btn { margin-top: 32px; }
.card-set-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 20px;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.card-set-subtitle {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  grid-row: 2;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--fg);
  margin: 16px 0;
}

.card-set-subtitle::before,
.card-set-subtitle::after {
  content: "";
  flex: 1;
  height: 1.5px;
  background-color: var(--fg);
  opacity: 0.85;
}

.card-set-subtitle::before {
  margin-right: 20px;
}

.card-set-subtitle::after {
  margin-left: 20px;
}

.card-set-subtitle span {
  white-space: nowrap;
  padding: 0 4px;
}

.card-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 12px 4px;
}

.icon-v3 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg);
}

.icon-v3 svg {
  width: 32px;
  height: 31px;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-icon:hover .icon-v3 svg {
  transform: scale(1.08);
}

.card-icon-title {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.4;
  color: var(--fg);
  text-align: center;
  margin: 0;
}

/* ---------- Footer ---------- */
.site-footer { border-top: 1px solid var(--border); }
.footer-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
  padding-top: 48px; padding-bottom: 48px;
}
.footer-grid h4 { font-size: 0.875rem; font-weight: 700; }
.footer-grid ul { margin-top: 16px; display: flex; flex-direction: column; gap: 8px; }
.footer-grid a {
  font-size: 0.875rem; color: var(--muted);
  transition: color 0.2s ease;
}
.footer-grid a:hover { color: var(--fg); }
.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 24px; padding-bottom: 24px;
  display: flex; flex-direction: column;
  align-items: center; gap: 16px;
  font-size: 0.875rem; color: var(--muted);
}

/* ---------- Animations ---------- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee { animation: none; }
  *, *::before, *::after { transition: none !important; animation: none !important; }
}

/* =================================================================
   Responsive breakpoints
================================================================= */

/* Tablet */
@media (min-width: 640px) {
  .container { padding-inline: 24px; }
  .hero-video { height: 600px; }
  .footer-bottom { flex-direction: row; justify-content: space-between; }
  .footer-grid { grid-template-columns: repeat(4, 1fr); }
  .card-set-grid { gap: 32px; }
}

@media (min-width: 768px) {
  .platform-grid { grid-template-columns: 1fr 1fr; }
  .float-cta { display: flex; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { padding-inline: 32px; }
  .primary-nav { display: flex; }
  .header-right { display: flex; }
  .hamburger { display: none; }
  .mobile-nav { display: none !important; }

  .hero { padding-top: 32px; }
  .hero-frame { border-radius: var(--radius-lg); }
  .hero-video { height: 680px; }
  .hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.25), rgba(0,0,0,0.1)); }
  .hero-content { align-items: flex-start; justify-content: center; text-align: left; padding: 64px; color: #fff; }
  .hero-content .eyebrow { color: rgba(255,255,255,0.85); }
  .hero-content .hero-title { color: #fff; font-size: 4.5rem; }
  .hero-content .hero-desc { color: rgba(255,255,255,0.9); margin-left: 0; margin-right: 0; }
  .hero-cta { justify-content: flex-start; }

  .trusted { padding: 96px 0; }
  .builtfor { padding: 112px 16px; }
  .dark-section { padding: 112px 16px; }
  .personas { padding: 112px 0; }
  .enterprise { padding: 112px 0; }

  .platform-grid { grid-template-columns: repeat(3, 1fr); gap: 48px; }
  .personas-grid { grid-template-columns: 1fr 1fr; gap: 64px; }
  .ai-section .container { grid-template-columns: 1fr 1fr; gap: 64px; }
  .ent-grid { grid-template-columns: 1fr 1fr; gap: 64px; }
  .card-set-grid { grid-template-columns: repeat(3, 1fr); }

  .ai-video-wrap { position: sticky; top: 96px; align-self: start; aspect-ratio: auto; height: 480px; }
}
