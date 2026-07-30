import React, { useState, useEffect, useCallback } from 'react';
import itemp12025 from "./assets/1itemp2025.jpg";
import itemp22025 from "./assets/2itemp2025.jpg";
import itemp32025 from "./assets/3itemp2025.jpg";
import cyberf1 from "./assets/cyfotress1.jpg";
import cyberf2 from "./assets/cyfortress2.jpg";
import cyberf3 from "./assets/cyfortress3.jpg";
import cyberf4 from "./assets/cyfortress4.jpg";
import itemp12026 from "./assets/itemp12026.jpg";
import itemp22026 from "./assets/itemp22026.jpg";
import itemp32026 from "./assets/itemp32026.jpg";
import itemp42026 from "./assets/itemp42026.jpg";
import itemp52026 from "./assets/itemp52026.jpg";
import itemp62026 from "./assets/itemp62026.jpg";

// How long the exit transition takes, in ms — must match the CSS
// `.stage-exit` transition-duration for .modal-content, or the modal will
// either get yanked off screen early or leave a blank gap before closing.
const EXIT_DURATION = 220;

function Activity() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDir, setSlideDir] = useState('next');
  // 'entering' -> just mounted, styles not applied yet (so the transition has
  // something to transition FROM). 'active' -> fully open. 'exiting' -> playing
  // the close animation before we actually remove it from the DOM.
  const [modalStage, setModalStage] = useState('closed');
  // click-to-zoom state for the modal image
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState('center');

  const activities = [
    {
      id: 1,
      title: "Cybersecurity and IT Empowering Day 2025",
      date: "May 2025",
      description: "Participate into Cybersecurity and IT Empowering Day 2025",
      fullDescription: "Participate into Cybersecurity and IT Empowering Day 2025, in this IT empoering day I had experience cyber security senior projects and ideas for senior project. Got experience and knowledge about cybersecurity fundamental from expert.",
      images: [
        itemp12025,
        itemp22025,
        itemp32025
      ]
    },
    {
      id: 2,
      title: "BU Cyber Fortress Challenge & Career Expo 2026",
      date: "February 2026",
      description: "Participate into BU Cyber Fortress Challenge & Career Expo 2026",
      fullDescription: "Participate into BU Cyber Fortress Challenge & Career Expo 2026. In this expo I had experience future careers and skills demand from various companies ex. nt, gable, YIP IN TSOI and others.",
      images: [
        cyberf1,
        cyberf2,
        cyberf3,
        cyberf4
      ]
    },
    {
      id: 3,
      title: "IT Empowering Day 2026 in the era of AI",
      date: "May 2026",
      description: "Prepare the fair and booth, participate in IT Empowering Day 2026 in the era of AI",
      fullDescription: "Prepare the fair and booth, participate in IT Empowering Day 2026 in the era of AI. Showing group senior project and experience AI adaption with real working from expert, learning career skills from many companies and experience fun activities.",
      images: [itemp12026,
        itemp22026,
        itemp32026,
        itemp42026,
        itemp52026,
        itemp62026
      ]
    }
  ];

  const openModal = (act) => {
    setSelectedActivity(act);
    setCurrentImageIndex(0);
    setModalStage('entering');
  };

  // Play the close animation first, THEN unmount — otherwise the modal
  // just vanishes with no exit feel. Also clears zoom so the next open
  // doesn't inherit a stale zoomed-in state.
  const closeModal = useCallback(() => {
    setModalStage('exiting');
    setIsZoomed(false);
    setTimeout(() => {
      setSelectedActivity(null);
      setModalStage('closed');
    }, EXIT_DURATION);
  }, []);

  // Flip to the "active" class on the next frame so the browser has a
  // "before" state to transition away from (mount with .stage-active
  // already applied and CSS transitions never fire).
  useEffect(() => {
    if (modalStage === 'entering') {
      const raf = requestAnimationFrame(() => setModalStage('active'));
      return () => cancelAnimationFrame(raf);
    }
  }, [modalStage]);

  // ESC to close + lock background scroll while a modal is open.
  useEffect(() => {
    if (!selectedActivity) return;
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
  }, [selectedActivity, closeModal]);

  // Switching images must always zoom back out — otherwise the next
  // image would appear already zoomed in from the previous one.
  useEffect(() => {
    setIsZoomed(false);
  }, [currentImageIndex]);

  // First click zooms in centered on the click point, second click zooms out.
  const handleImageClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const originX = ((e.clientX - rect.left) / rect.width) * 100;
    const originY = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${originX}% ${originY}%`);
    setIsZoomed((z) => !z);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedActivity) {
      setSlideDir('next');
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedActivity.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedActivity) {
      setSlideDir('prev');
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedActivity.images.length - 1 : prevIndex - 1
      );
    }
  };

  const overlayClass = `modal-overlay${modalStage === 'active' ? ' stage-active' : ''}${modalStage === 'exiting' ? ' stage-exit' : ''}`;
  const contentClass = `modal-content${modalStage === 'active' ? ' stage-active' : ''}${modalStage === 'exiting' ? ' stage-exit' : ''}`;

  return (
    <div className="page-panel">
      <div className="activity-content">
        {activities.map((act) => (
          <div
            key={act.id}
            className="activity-card"
            onClick={() => openModal(act)}
            style={{ cursor: 'pointer' }}
          >
            <div className="activity-pic__placeholder">
              {act.images && act.images.length > 0 && (
                <img src={act.images[0]} alt="cover" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
              )}
            </div>

            <div className="activity-text">
              <span className="activity-date">{act.date}</span>
              <h3 className="activity-text__title">{act.title}</h3>
              <p className="activity-text__body">{act.description}</p>
            </div>

            {/* Peek hint — shows on hover/focus so a card doesn't feel like a dead click */}
            <span className="card-peek">🔍</span>
          </div>
        ))}
      </div>

      {/* ---------------- Pop-up Modal ---------------- */}
      {selectedActivity && (
        <div className={overlayClass} onClick={closeModal}>
          <div className={contentClass} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ✕
            </button>

            <div className="modal-header">
              <h3 className="modal-title">{selectedActivity.title}</h3>
            </div>

            <div className="modal-slider">
              {selectedActivity.images && selectedActivity.images.length > 1 && (
                <button className="slider-btn left" onClick={prevImage}>❮</button>
              )}

              <div className="slider-image-container">
                {selectedActivity.images && selectedActivity.images.length > 0 ? (
                  <img
                    key={currentImageIndex}
                    src={selectedActivity.images[currentImageIndex]}
                    alt={`slide ${currentImageIndex}`}
                    className={`slider-image slide-${slideDir}${isZoomed ? ' is-zoomed' : ''}`}
                    style={{ transformOrigin: zoomOrigin }}
                    onClick={handleImageClick}
                  />
                ) : (
                  <p style={{ textAlign: 'center', padding: '50px 0' }}>ไม่มีรูปภาพ</p>
                )}
              </div>

              {selectedActivity.images && selectedActivity.images.length > 1 && (
                <button className="slider-btn right" onClick={nextImage}>❯</button>
              )}
            </div>

            {selectedActivity.images && selectedActivity.images.length > 1 && (
              <div className="slider-indicator">
                {currentImageIndex + 1} / {selectedActivity.images.length}
              </div>
            )}
            {selectedActivity.fullDescription && (
              <div className="modal-description" style={{ marginTop: '16px', padding: '0 8px' }}>
                <p className="activity-text__body" style={{ whiteSpace: 'pre-line' }}>
                  {selectedActivity.fullDescription}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Activity;