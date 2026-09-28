const I18N = {
en: {
  "contact.addr": "Address",
  "contact.cta": "Call now to book",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Tue: 6:00 AM – 10:00 PM<br>Wed: 6:00 AM – 9:00 PM<br>Thu: 6:00 AM – 9:30 PM<br>Fri: 7:00 AM – 8:30 PM<br>Sat – Sun: closed",
  "contact.kicker": "Get in touch",
  "contact.phone": "Phone",
  "contact.title": "Book your visit",
  "faq.a1": "Monday and Tuesday 6:00 AM to 10:00 PM, Wednesday 6:00 AM to 9:00 PM, Thursday 6:00 AM to 9:30 PM, Friday 7:00 AM to 8:30 PM. Closed weekends.",
  "faq.a2": "General repairs, wiring and rewiring, lighting, panel upgrades, outlets and switches, and ceiling fan installation for Tucson homes.",
  "faq.a3": "Yes — we're open late Monday through Thursday, so you don't have to take time off work.",
  "faq.a4": "Call (520) 612-3376 during opening hours.",
  "faq.kicker": "Good to know",
  "faq.q1": "What are your opening hours?",
  "faq.q2": "What electrical services do you handle?",
  "faq.q3": "Do you work evenings?",
  "faq.q4": "How do I book a visit?",
  "faq.title": "Frequently asked questions",
  "footer.tag": "Residential electrician · Tucson, Arizona",
  "gallery.c1": "Outdoor lighting, installed cleanly",
  "gallery.c2": "Ceiling fans, wired safely",
  "gallery.c3": "Panels and outlets, done to code",
  "gallery.kicker": "On the job",
  "gallery.title": "Clean work, safe homes",
  "hero.cta1": "Book a visit",
  "hero.cta2": "See services",
  "hero.kicker": "Tucson, Arizona · Residential electrical work",
  "hero.sub": "Molinas Electrical keeps Tucson homes powered — repairs, wiring, lighting and panels, done to code and clearly priced.",
  "hero.title": "Done right,<br>done safe.",
  "nav.call": "(520) 612-3376",
  "nav.contact": "Contact",
  "nav.faq": "FAQ",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.services": "Services",
  "nav.why": "Why us",
  "reviews.kicker": "What neighbors say",
  "reviews.more": "5.0 out of 5 — see what Tucson neighbors say about us",
  "reviews.title": "Rated 5.0 in Tucson",
  "services.kicker": "What we do",
  "services.s1d": "Troubleshooting and repair for outlets, switches, circuits and more.",
  "services.s1t": "General Electrical Repairs",
  "services.s2d": "New wiring and rewiring done to code, neatly and safely.",
  "services.s2t": "Wiring & Rewiring",
  "services.s3d": "Indoor and outdoor lighting installed cleanly and correctly.",
  "services.s3t": "Lighting Installation",
  "services.s4d": "Panel replacements and upgrades for safer, modern power.",
  "services.s4t": "Breaker Panel Upgrades",
  "services.s5d": "New outlets, dimmers and switches — including GFCI protection.",
  "services.s5t": "Outlets & Switches",
  "services.s6d": "Ceiling fans wired safely and balanced for quiet running.",
  "services.s6t": "Ceiling Fan Installation",
  "services.title": "Residential electrical, done properly",
  "stats.diag": "code-compliant work",
  "stats.diagNum": "Safe",
  "stats.hours": "open late, till 10pm Mon–Tue",
  "stats.hoursNum": "Mon – Fri",
  "stats.makes": "customer rating",
  "stats.makesNum": "5.0",
  "stats.quote": "upfront pricing",
  "stats.quoteNum": "Clear",
  "walkin.w1d": "Open late — till 8:30pm+",
  "walkin.w1t": "Mon – Fri",
  "walkin.w2d": "Mon–Thu open past 9pm",
  "walkin.w2t": "Evening hours",
  "walkin.w3d": "Residential electrical work",
  "walkin.w3t": "Homes",
  "why.intro": "Molinas Electrical is a Tucson local shop with evening hours that fit real life. Safe, code-compliant work, clearly priced before we start.",
  "why.kicker": "Why choose us",
  "why.l1d": "Open late Monday through Thursday — electrical help after work.",
  "why.l1t": "Evening hours",
  "why.l2d": "Every job done to code and tested before we leave.",
  "why.l2t": "Safe & code-compliant",
  "why.l3d": "The price is confirmed before any work begins.",
  "why.l3t": "Clear pricing",
  "why.l4d": "On N Geronimo Ave — a real neighborhood business.",
  "why.l4t": "Tucson local",
  "why.title": "Tucson's dependable electrician"
}};

const lang = "en";

function applyLang() {
  document.documentElement.lang = "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N.en[key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.title = "Molinas Electrical — Electrician in Tucson, AZ | Trusted Electrical Work";
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang();
