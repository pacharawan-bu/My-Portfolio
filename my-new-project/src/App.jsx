import { useState } from "react";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import AboutMe from "./Aboutme.jsx";
import Myproject from "./Myproject.jsx";
import Certificate from "./Certificate.jsx";
import Activity from "./Activity.jsx";
import Contact from "./Contact.jsx";
import Emailme from "./Emailme.jsx";
import PlaceholderPage from "./Placeholderpage.jsx";
import ThemeToggle from "./Themetoggle.jsx";
import "./index.css";

// -----------------------------------------------------------------------
// Maps each page key -> { title, component }.
// "home" is the first screen (photo card + icon buttons).
// Every other key is a sidebar page shown after a button is clicked.
// -----------------------------------------------------------------------
const pages = {
  about: { title: "About me", component: <AboutMe /> },
  projects: { title: "My Projects", component: <Myproject /> },
  certificates: { title: "Certificates", component: <Certificate /> },
  activities: {title: "Activities", component: <Activity/>},
  contact: { title: "Contacts", component: <Contact/> },
  email: { title: "Email me", component: <Emailme/> },
};

export default function App() {
  const [isLight, setIsLight] = useState(true);
  const [activePage, setActivePage] = useState("home"); // first screen shown

  return (
    <div className={`page ${isLight ? "theme-light" : "theme-dark"}`}>
      {activePage === "home" && (
        <>
          <div className="blob blob--left" aria-hidden="true" />
          <div className="blob blob--right" aria-hidden="true" />
        </>
      )}

      <ThemeToggle isLight={isLight} onToggle={() => setIsLight((v) => !v)} />

      {activePage === "home" ? (
        <Card onNavigate={setActivePage} />
      ) : (
        <div className="layout">
          <Sidebar activePage={activePage} onNavigate={setActivePage} />
          <main className="content">
            <Header title={pages[activePage].title} />
            {pages[activePage].component}
          </main>
        </div>
      )}
    </div>
  );
}