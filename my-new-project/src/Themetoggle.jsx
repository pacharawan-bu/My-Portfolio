export default function ThemeToggle({ isLight, onToggle }) {
  return (
    <div className="theme-toggle">
      <button
        className={`theme-toggle__switch ${isLight ? "is-light" : "is-dark"}`}
        onClick={onToggle}
        type="button"
        aria-pressed={isLight}
        aria-label="Toggle light or dark mode"
      >
        <span className="theme-toggle__knob">
          <span className="theme-toggle__icon" aria-hidden="true">
            {isLight ? "☀" : "☾"}
          </span>
        </span>
      </button>
      <span className="theme-toggle__label">{isLight ? "Light Mode" : "Dark Mode"}</span>
    </div>
  );
}