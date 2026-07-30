import React, { useState, useEffect, useCallback } from 'react';

// How long the exit transition takes, in ms — must match the CSS
// `.stage-exit` transition-duration for .modal-content.
const EXIT_DURATION = 220;

function MyProject() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDir, setSlideDir] = useState('next');
  const [modalStage, setModalStage] = useState('closed');
  // click-to-zoom state for the modal image
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('center');

   const projects = [
    {
      id: 1,
      title: "Design System UX/UI shopping application (2023)",
      shortDesc: "Shopping application UX/UI design by using Figma",
      fullDesc: "Shopping application UX/UI design. Start with mock-up customer persona.",
      projectLink: "https://www.figma.com/design/n5QO1f9MZniJs6C8RqT5k1/Design-system?node-id=0-1&t=HDkxnQ475GtHIBOx-1",
      docLink: "",
      downloadLink: "",
      coverImage: "https://i.postimg.cc/sfmk9ZVf/uxuipic.png",
      media: [
        { type: 'image', url: "https://i.postimg.cc/sfmk9ZVf/uxuipic.png" },
        { type: 'image', url: "https://i.postimg.cc/3NVgsKjL/uxuipic2.png" },
        { type: 'image', url: "https://i.postimg.cc/GtVkWcP5/uxuipic3.png" },
        { type: 'video', url: "https://drive.google.com/file/d/18ufHbSMO2fJKM0sWc8-rad1xfVQwXXFi/preview" }
      ]
    },
    {
      id: 2,
      title: "Sticky Rogue Project (2026)",
      shortDesc: "Project roguelike RPG mobile game for class mobile application development using .NET MAUI Framework.",
      fullDesc: "StickyRogue is android mobile application project development by using .NET MAUI. In this project I take responsibility as co-developer, game features design and character design in this project. Download is apk file.",
      projectLink: "https://github.com/aps-pr-dbs/StickyRogueProjectSln.git",
      docLink: "https://drive.google.com/file/d/10NIrQcRfw8-yL9SZ0BCXzONZBAX2PEen/view?usp=sharing", 
      downloadLink: "https://www.upload-apk.com/dvgJuIzuXxx2SUQ",
      media: [
        { type: 'image', url: "https://i.postimg.cc/GhsHrm5S/Screenshot-20260726-132257.jpg" },
        { type: 'image', url: "https://i.postimg.cc/ncQCZhPg/Screenshot-20260726-132309.jpg" },
        { type: 'image', url: "https://i.postimg.cc/Hs7VHkhf/Screenshot-20260726-132312.jpg" },
        { type: 'image', url: "https://i.postimg.cc/7YTfDZR6/Screenshot-20260726-132315.jpg" },
        { type: 'image', url: "https://i.postimg.cc/yYSkB8GN/Screenshot-20260726-132320.jpg" },
        { type: 'image', url: "https://i.postimg.cc/sgd12RFj/Screenshot-20260726-132334.jpg" },
        { type: 'image', url: "https://i.postimg.cc/WbJhj1HY/Screenshot-20260726-132300.jpg" },
        { type: 'video', url: "https://drive.google.com/file/d/1qlQ5LGZhdYqJGd0-UW0O5sXdeIVRO2Cc/preview" }
      ]
    },
    {
      id: 3,
      title: "BU Smart Lab Management System (2026)",
      shortDesc: "Smart lab management system for computer lab (during development)",
      fullDesc: "Smart lab management system for computer lab, using ai agent for track user and track time. Tect Stack : React, MUI, axious, VITE, Fast API, SQLAlchemy, sapabase, PostgreSQL, DeepFace, SilenceFace anti spoofing, PYQT6, psutil",
      projectLink: "https://busmartlab.space/",
      docLink: "https://drive.google.com/file/d/1J6pb-PnRhTlTBlYZmLKV3DQXKNQ1Ac_w/view?usp=sharing", 
      downloadLink: "https://github.com/Chonlasit-junn/smart-lab-system.git",
      media: [
        { type: 'image', url: "https://i.postimg.cc/HsZDSw2F/Screenshot-2026-07-26-140305.png" },
        { type: 'image', url: "https://i.postimg.cc/L6CKytTw/image2.png" },
        { type: 'image', url: "https://i.postimg.cc/02WRtYfH/image.png" },
        { type: 'image', url: "https://i.postimg.cc/8PKQyR4Q/Screenshot-2026-07-26-140553.png" },
        { type: 'video', url: "https://drive.google.com/file/d/1LsaFvMUKdx6rBKITfaijHUypewtdrMED/preview"}
      ]
    },
    {
      id: 4,
      title: "User Management System (2024)",
      shortDesc: "User Management System website base via azure (azure database is already expired, now just mockup demo)",
      fullDesc: "User Management System website base via azure, using azure as cloud database for kept user data and email data. I take responsibility as backend and frontend co-developer with my friend.",
      projectLink: "https://t1mothee-001-site1.jtempurl.com/",
      docLink: "https://drive.google.com/file/d/1kQ2Yd2livuO_aknhMvQCy77Wvw3Dunju/view?usp=sharing", 
      downloadLink: "https://github.com/pacharawan-bu/FinalProject_OFSD.git",
      media: [
        { type: 'image', url: "https://i.postimg.cc/K8pXFjGz/ofsd1.png" },
        { type: 'image', url: "https://i.postimg.cc/NjChYFsF/ofsd2.png" },
        { type: 'image', url: "https://i.postimg.cc/JzYwm0rt/ofsd3.png" },
        { type: 'image', url: "https://i.postimg.cc/Z5skZnbC/ofsd4.png" },
        { type: 'video', url: "https://drive.google.com/file/d/1xsuHCzpKfjpzFXBEhiCzav1dLWfAGeEW/preview"}
      ]
    },
    {
      id: 5,
      title: "Som Rue Thai Hotel (2025)",
      shortDesc: "Hotel's tenants database management base on Python.",
      fullDesc: "Som Rue Thai Hotel is application that use for manage hotel room and tenants data develop by using Python. This project focus on database design and database management, in this project I take responsibility on coding billing & invoice management system.",
      projectLink: "https://github.com/pacharawan-bu/SomRueThaiHotel-db.git",
      docLink: "https://drive.google.com/file/d/10ChlK1s7NZgoJzbIp1KOVnYUqXtHkqPa/view?usp=sharing", 
      downloadLink: "",
      media: [
        { type: 'image', url: "https://i.postimg.cc/mDN1wrMt/hotel1.png" },
        { type: 'image', url: "https://i.postimg.cc/sX9Gc2SY/hotel2.png" },
        { type: 'image', url: "https://i.postimg.cc/V6B0RNMX/hotel3.png" },
        { type: 'image', url: "https://i.postimg.cc/LXBgTsfV/hotel4.png" },
        { type: 'image', url: "https://i.postimg.cc/kGJ6hdFK/hotel7.png" },
        { type: 'image', url: "https://i.postimg.cc/NFs9Pw71/hotel10.png" },

      ]
    },
    {
      id: 6,
      title: "Artworks",
      shortDesc: "My artworks & design",
      fullDesc: "A few of my artworks and character design.",
      projectLink: "",
      docLink: "", 
      downloadLink: "",
      media: [
        { type: 'image', url: "https://i.postimg.cc/JhCBM4tY/mi-m-ch-x-215-20260627115034.png" },
        { type: 'image', url: "https://i.postimg.cc/Bvf14QtV/mi-m-ch-x-216-20260627123125.png" },
        { type: 'image', url: "https://i.postimg.cc/zXMg2krP/mi-m-ch-x-202-(5).png" },
        { type: 'image', url: "https://i.postimg.cc/023wXCsV/mi-m-ch-x-202-(2).png" },
        { type: 'image', url: "https://i.postimg.cc/hPwdZ0BC/mi-m-ch-x-202-(3).png" },
        { type: 'image', url: "https://i.postimg.cc/KYhgxv45/mi-m-ch-x-202-(22).png" },
        { type: 'image', url: "https://i.postimg.cc/SN5M1G4n/mi-m-ch-x-202-(15).png" },
        { type: 'image', url: "https://i.postimg.cc/J4gkYQ8r/mi-m-ch-x-202-(13).png" },
        { type: 'image', url: "https://i.postimg.cc/VLTCZF8h/mi-m-ch-x-202-(10).png" },
        { type: 'image', url: "https://i.postimg.cc/Gh9Dj5ZT/mi-m-ch-x-193-(5).png" },
        { type: 'image', url: "https://i.postimg.cc/c463cbVB/mi-m-ch-x-193-(3).png" },
        { type: 'image', url: "https://i.postimg.cc/283WxKPn/mi-m-ch-x-193-(2).png" },
        { type: 'image', url: "https://i.postimg.cc/qMgKG595/mi-m-ch-x-193.png" },
        
      ]
    }
  ];

  const openModal = (proj) => {
    setSelectedProject(proj);
    setCurrentSlide(0);
    setModalStage('entering');
  };

  // Play the close animation first, THEN unmount. Also clears zoom so the
  // next open doesn't inherit a stale zoomed-in state.
  const closeModal = useCallback(() => {
    setModalStage('exiting');
    setIsZoomed(false);
    setTimeout(() => {
      setSelectedProject(null);
      setModalStage('closed');
    }, EXIT_DURATION);
  }, []);

  useEffect(() => {
    if (modalStage === 'entering') {
      const raf = requestAnimationFrame(() => setModalStage('active'));
      return () => cancelAnimationFrame(raf);
    }
  }, [modalStage]);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedProject, closeModal]);

  // Switching slides must always zoom back out — otherwise the next
  // media item would appear already zoomed in from the previous one.
  useEffect(() => {
    setIsZoomed(false);
  }, [currentSlide]);

  // First click zooms in centered on the click point, second click zooms out.
  const handleImageClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = ((e.clientX - rect.left) / rect.width) * 100;
    const originY = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${originX}% ${originY}%`);
    setIsZoomed((z) => !z);
  };

  const nextSlide = () => {
    if (selectedProject?.media) {
      setSlideDir('next');
      setCurrentSlide((prev) => (prev === selectedProject.media.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (selectedProject?.media) {
      setSlideDir('prev');
      setCurrentSlide((prev) => (prev === 0 ? selectedProject.media.length - 1 : prev - 1));
    }
  };

  const overlayClass = `modal-overlay${modalStage === 'active' ? ' stage-active' : ''}${modalStage === 'exiting' ? ' stage-exit' : ''}`;
  const contentClass = `modal-content project-modal${modalStage === 'active' ? ' stage-active' : ''}${modalStage === 'exiting' ? ' stage-exit' : ''}`;

  return (
    <div className="page-panel">
      <div className="project-content">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="project-card"
            onClick={() => openModal(proj)}
          >
            <div className="project-media">
              <img
                src={proj.coverImage || proj.media?.[0]?.url}
                alt={proj.title}
                className="project-pic"
              />
            </div>

            <div className="project-text">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.shortDesc}</p>
            </div>

            {/* Peek hint — shows on hover/focus so a card doesn't feel like a dead click */}
            <span className="card-peek">🔍</span>
          </div>
        ))}
      </div>

      {/* Modal / Pop-up */}
      {selectedProject && (
        <div className={overlayClass} onClick={closeModal}>
          <div className={contentClass} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close-btn" onClick={closeModal}>
              X
            </button>

            <h2 className="modal-title">{selectedProject.title}</h2>

            {selectedProject.media && selectedProject.media.length > 0 && (
              <>
                <div className="modal-slider">
                  {selectedProject.media.length > 1 && (
                    <button type="button" className="slider-btn left" onClick={prevSlide}>
                      &lt;
                    </button>
                  )}

                  <div className="slider-image-container">
                    {selectedProject.media[currentSlide].type === 'video' ? (
                      <iframe
                        key={currentSlide}
                        src={selectedProject.media[currentSlide].url}
                        title={`${selectedProject.title} video`}
                        className={`slide-${slideDir}`}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img
                        key={currentSlide}
                        src={selectedProject.media[currentSlide].url}
                        alt={`${selectedProject.title} - Slide ${currentSlide + 1}`}
                        className={`slider-image slide-${slideDir}${isZoomed ? ' is-zoomed' : ''}`}
                        style={{ transformOrigin: zoomOrigin }}
                        onClick={handleImageClick}
                      />
                    )}
                  </div>

                  {selectedProject.media.length > 1 && (
                    <button type="button" className="slider-btn right" onClick={nextSlide}>
                      &gt;
                    </button>
                  )}
                </div>

                {selectedProject.media.length > 1 && (
                  <div className="slider-indicator">
                    {currentSlide + 1} / {selectedProject.media.length}
                  </div>
                )}
              </>
            )}

            <p className="activity-text__body">{selectedProject.fullDesc}</p>

            <div className="modal-actions">
              {selectedProject.projectLink && (
                /* Added missing "a" tag here */
                <a
                  href={selectedProject.projectLink}
                  className="sidebar-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}

              {selectedProject.docLink && (
                /* Added missing "a" tag here */
                <a
                  href={selectedProject.docLink}
                  className="sidebar-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              )}

              {selectedProject.downloadLink && (
                /* Added missing "a" tag here */
                <a
                  href={selectedProject.downloadLink}
                  className="sidebar-btn"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProject;