import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Emailme() {
  const form = useRef();
  
  // เพิ่ม State สำหรับเก็บค่าอีเมลและหัวข้อ
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // แทนที่ค่าเหล่านี้ด้วยข้อมูลจากบัญชี EmailJS ของคุณ
    const serviceID = 'service_ojk36pa';
    const templateID = 'template_v5fk4kn';
    const publicKey = 'PU3yBekBJU1xOE11i';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('Success:', result.text);
          alert('Message has sent!');
          
          // เคลียร์ข้อมูลทุกช่องหลังส่งเสร็จ
          setSenderEmail('');
          setSubject('');
          setMessage(''); 
      }, (error) => {
          console.log('Failed:', error.text);
          alert('Error to send message');
      });
  };

  return (
    <div className="page-panel">
      <div className="email-content">
        <h2 className="email-title">Send to : tm.pachara@gmail.com</h2>
        <form ref={form} onSubmit={sendEmail} className="email-form">
          

          {/* ช่องใส่อีเมลผู้ส่ง */}
          <input
            type="email"
            name="senderEmail"
            className="email-input"
            placeholder="Your Email *"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />

          {/* ช่องใส่หัวข้อ */}
          <input
            type="text"
            name="subject"
            className="email-input"
            placeholder="Subject *"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          {/* กล่องข้อความ */}
          <textarea
            name="message" 
            className="email-textarea"
            maxLength="9999"
            placeholder="Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          
          <div className="email-footer">
            <span className="email-counter">{message.length}/9999</span>
            <button type="submit" className="email-submit-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Emailme;