const LOGO_SRC = "/logo.png";
const LOGO_ALT = "The Eye";

const NAV = [
  { href: "/", label: "HOME", id: "home" },
  { href: "/subjects.html", label: "AVATARS", id: "avatars" },
  { href: "/ethics.html", label: "KVKK", id: "kvkk" },
];

function navHtml(active) {
  return NAV.map(
    (item) =>
      `<a href="${item.href}"${item.id === active ? ' class="active"' : ""}>${item.label}</a>`
  ).join("");
}

function renderHeader(active) {
  const el = document.getElementById("site-header");
  if (!el) return;
  el.innerHTML = `
    <div class="container header-inner">
      <a class="brand" href="/">
        <img class="brand-logo" src="${LOGO_SRC}" alt="${LOGO_ALT}" />
      </a>
      <nav class="site-nav" aria-label="Main">${navHtml(active)}</nav>
    </div>
  `;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <div class="container footer-inner">
      <a class="footer-brand" href="/">
        <img class="footer-logo" src="${LOGO_SRC}" alt="${LOGO_ALT}" />
      </a>
      <nav class="footer-nav" aria-label="Footer">
        ${NAV.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
    </div>
  `;
}

const active = document.body.dataset.page || "home";
renderHeader(active);
renderFooter();
