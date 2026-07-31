import mepic from "./assets/me.png";

// Logos come from public icon CDNs (Simple Icons / Devicon) so nothing needs
// to be bundled as an asset. `logo` is left out for skills that don't have an
// official brand mark available (soft skills, and a couple of niche apps) —
// those just render as plain text pills instead of a broken image.
const skillGroups = [
  {
    icon: "",
    title: "Technical Skill & Tools",
    items: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python" },
      {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      },
      { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?_=20120221235433" },
      { name: "HTML5", logo: "https://cdn.simpleicons.org/html5" },
      { name: "CSS", logo: "https://cdn.simpleicons.org/css" },
      { name: "React.js", logo: "https://cdn.simpleicons.org/react" },
      { name: "Node js", logo: "https://www.myqnap.org/wp-content/uploads/nodejs-logo.gif" },
      { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql" },
      { name: ".NET MAUI", logo: "https://cdn.simpleicons.org/dotnet" },
      { name: "Google Colab", logo: "https://cdn.simpleicons.org/googlecolab" },
      { name: "Linux", logo: "https://cdn.pixabay.com/photo/2017/01/31/15/33/linux-2025130_1280.png" },
      { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
      {
        name: "Visual Studio Code",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1280px-Visual_Studio_Code_1.35_icon.svg.png?_=20210804221519",
      },
      {
        name: "Microsoft Office",
        logo: "https://www.logo.wine/a/logo/Microsoft_Office/Microsoft_Office-Logo.wine.svg",
      },
    ],
  },
  {
    icon: "",
    title: "Soft Skill",
    items: [
      { name: "Creativity" },
      { name: "Teamwork" },
      { name: "Followership" },
      { name: "Problem-Solving" },
      { name: "Empathy for colleagues" },
    ],
  },
  {
    icon: "",
    title: "Design Skill & Tools",
    items: [
      { name: "UX/UI Design" },
      { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
      { name: "Ibispaint", logo : "https://img.icons8.com/color/512/ibis-paint-x.png" },
      { name: "Clip Studio PAINT", logo : "https://upload.wikimedia.org/wikipedia/commons/1/14/Clipstudiopaint_app_logo.png" },
    ],
  },
];

export default function AboutMe() {
  return (
    <div className="page-panel">
      <div className="about-content">
        <div className="about-pic-wrapper">
          <img
            src="https://i.postimg.cc/13MvNwS4/flappykitty.gif"
            alt="flappykit"
            className="addition-pic"
          />

          <div className="about-pic">
            <img src={mepic} alt="My Profile" className="about-pic__img" />
          </div>

          <img
            src="https://i.postimg.cc/13MvNwS4/flappykitty.gif"
            alt="flappykit"
            className="addition-pic"
          />
        </div>

        <div className="about-text">
          <h3 className="about-text__title">
            Pacharawan Buasrichan
            <br /> (พชรวรรณ บัวศรีจันทร์)
          </h3>

          <div className="about-facts">
            <span className="about-fact">Major Computer Science Year 4</span>
            <span className="about-fact">GPA 3.81</span>
            <span className="about-fact">🇹🇭 Thai : Native</span>
            <span className="about-fact">🇬🇧 English : Intermediate</span>
          </div>

          <p className="about-bio">
             I'm 4th Year <strong>Bangkok University</strong>, School of Information Technology and Innovation Major Computer Science student
             I had experience in mobile application development and UX/UI design through class projects and strongly interest in web develipment and UX/UI design.
          </p>

  <div className="about-note">
    <span className="about-note__label">✏️ Education</span>
    <p className="about-note__body">
      2023–present Bangkok University<br />
      School of Information Technology and Innovation, Computer Science
    </p>
  </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h4 className="skill-group__title">
                  <span className="skill-group__icon" aria-hidden="true">
                    {group.icon}
                  </span>
                  {group.title}
                </h4>
                <div className="skill-tags">
                  {group.items.map((item) =>
                    item.logo ? (
                      <span className="skill-chip" key={item.name}>
                        <img
                          src={item.logo}
                          alt=""
                          className="skill-chip__logo"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        {item.name}
                      </span>
                    ) : (
                      <span className="skill-tag" key={item.name}>
                        {item.name}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}