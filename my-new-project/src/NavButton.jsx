

export default function NavButton({ label, icon, onClick }) {
  return (
    <button className="nav-card" onClick={onClick} type="button" title={label}>
      <div className="nav-card__icon">
        {icon ? (
          <img src={icon} alt={label} className="nav-card__img" />
        ) : (
          <span className="nav-card__placeholder"></span>
        )}
      </div>
      <span className="nav-card__label">{label}</span>
    </button>
  );
}