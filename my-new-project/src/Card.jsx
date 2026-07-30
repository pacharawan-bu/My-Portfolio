
import NavButton from "./NavButton";
import abtmeLogo from "./assets/abtme.png";
import projectLogo from "./assets/project.png";
import certLogo from "./assets/certificate.png";
import contactLogo from "./assets/contact.png";
import emailLogo from "./assets/mail.png";
import actLogo from "./assets/activity.png";


// -----------------------------------------------------------------------
// Button data — `page` must match the keys used in App.jsx's `pages` map,
// so clicking a button navigates to the right page.
// Swap `icon` for an image path/import later.
// -----------------------------------------------------------------------
const buttons = [
  { key: "about", page: "about", label: "About Me", icon: abtmeLogo },
  { key: "projects", page: "projects", label: "My Projects", icon: projectLogo },
  { key: "certificates", page: "certificates", label: "Certificates", icon: certLogo },
  { key: "activities", page: "activities", label: "Activities", icon: actLogo},
  { key: "contact", page: "contact", label: "Contacts", icon: contactLogo },
  { key: "email", page: "email", label: "Email Me", icon: emailLogo },
];

function Card({ onNavigate }) {
  const topRow = buttons.slice(0, 3);
  const bottomRow = buttons.slice(3);

  return (
    <div className="card">
      <h1>My Portfolio</h1>
      <img
        className="card-image"
        src="https://i.postimg.cc/qM6KdVrb/0720.gif"
        
      />

      <div className="nav-row">
        {topRow.map((b) => (
          <NavButton
            key={b.key}
            label={b.label}
            icon={b.icon}
            onClick={() => onNavigate(b.page)}
          />
        ))}
      </div>
      <div className="nav-row">
        {bottomRow.map((b) => (
          <NavButton
            key={b.key}
            label={b.label}
            icon={b.icon}
            onClick={() => onNavigate(b.page)}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;