

// -----------------------------------------------------------------------
// Sidebar nav data — `page` must match the keys used in App.jsx's
// `pages` lookup so clicking a button shows the right page.
// -----------------------------------------------------------------------
const navItems = [
  { key: "home", label: "Home" },
  { key: "about", label: "About me" },
  { key: "projects", label: "My Projects" },
  { key: "certificates", label: "Certificates" },
  { key: "activities", label: "Activities" },
  { key: "contact", label: "Contacts" },
  { key: "email", label: "Email me" },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <nav className="sidebar">
      {navItems.map((item) => (
        <button
          key={item.key}
          type="button"
          className={`sidebar-btn ${activePage === item.key ? "is-active" : ""}`}
          onClick={() => onNavigate(item.key)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}