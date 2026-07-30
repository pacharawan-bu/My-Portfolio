
// Generic stand-in for pages that don't have custom content yet
// (My Project, Certificates, Contact, Email me, Home).
export default function PlaceholderPage({ title }) {
  return (
    <div className="page-panel">
      <p className="placeholder-text">{title} content goes here.</p>
    </div>
  );
}