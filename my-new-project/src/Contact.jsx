import React, { useState } from 'react';

// ใช้โลโก้จาก Simple Icons CDN แบบเดียวกับหน้า About Me — ไม่ต้อง bundle asset เอง
// ช่องที่ยังไม่มี brand icon ที่เหมาะ (เบอร์โทร) ใช้ emoji แทน
const contactChannels = [
  {
    key: 'email1',
    icon: 'https://cdn.simpleicons.org/gmail',
    label: 'Email',
    display: 'tm.pachara@gmail.com', // TODO: ใส่อีเมลจริง
    href: 'mailto:tm.pachara@gmail.com',
    copyValue: 'tm.pachara@gmail.com',
  },
  {
    key: 'email2',
    icon: 'https://cdn.simpleicons.org/gmail',
    label: 'Email',
    display: 'pacharawan.buas@bumail.net',
    href: 'mailto:pacharawan.buas@bumail.net',
    copyValue: 'pacharawan.buas@bumail.net',
  },
  {
    key: 'tel',
    icon: null,
    emoji: '☎️',
    label: 'Tel',
    display: '089-833-1578', // TODO: ใส่เบอร์จริง
    href: 'tel:0898331578',
    copyValue: '0898331578',
  },
];

const socialLinks = [
  { key: 'github', icon: 'https://cdn.simpleicons.org/github', display: 'GitHub', href: 'https://github.com/pacharawan-bu' },
  { key: 'ig-private', icon: 'https://cdn.simpleicons.org/instagram', display: 'Instagram (Private)', href: 'https://www.instagram.com/_oryct?igsh=MW43c3Nmbng3cXkxcg==' },
  { key: 'ig-art', icon: 'https://cdn.simpleicons.org/instagram', display: 'Instagram Artworks', href: 'https://www.instagram.com/bruhmomentions?igsh=Y2ZhaXYza2V4eWU0' },
];

function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedKey(key);
        setTimeout(() => {
          setCopiedKey((current) => (current === key ? null : current));
        }, 2000);
      })
      .catch((err) => console.error('Failed to copy!', err));
  };

  return (
    <div className="page-panel">
      <div className="about-content contact-list">
        {contactChannels.map((c) => (
          <div className="contact-item" key={c.key}>
            <span className="contact-icon">
              {c.icon ? (
                <img
                  src={c.icon}
                  alt=""
                  className="contact-icon__img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <span aria-hidden="true">{c.emoji}</span>
              )}
            </span>

            <span className="contact-label">{c.label}</span>

            <a href={c.href} className="contact-link">
              {c.display}
            </a>

            <button
              type="button"
              className="copy-btn"
              onClick={() => handleCopy(c.copyValue, c.key)}
            >
              {copiedKey === c.key ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}

        <div className="contact-item contact-item--social">
          <span className="contact-icon" aria-hidden="true">
            🔗
          </span>
          <span className="contact-label">Social</span>

          <div className="contact-social-links">
            {socialLinks.map((s) => (
              /* Added the missing "a" tag name here */
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="contact-link contact-link--social"
              >
                <img
                  src={s.icon}
                  alt=""
                  className="contact-icon__img"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {s.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;