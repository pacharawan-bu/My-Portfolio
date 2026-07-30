import badgeImg from "./assets/awsbadge.png";
// สมมติว่าแปลง PDF เป็นรูปแล้วเอามาไว้ในโฟลเดอร์เดียวกับรูปแรก
import certImg from "./assets/ncsaCer.png"; 

function Certificate() {
  const pdfUrl = "/certificate/ncsaCer.pdf"; // ยังเก็บไว้เผื่อให้คนกดดาวน์โหลด

  return (
    <div className="page-panel">
      {/* 1. ส่วนรูป Badge AWS */}
      <div className="about-content certificate-content">
        <img className="badge-pic" src={badgeImg} alt="AWS Certification Badge" />
        <div className="about-text">
          <h3 className="about-text__title">
            AWS Academy Graduate - Cloud Foundations - Training Badge
          </h3>
          <p className="about-text__body">
            Issued by Amazon Web Services Training and Certification<br />
            <a href="https://www.credly.com/badges/69cf60ce-052c-480a-a148-7bc5f982739a" target="_blank" rel="noopener noreferrer" >View Badge</a>
          </p>
        </div>
      </div>

      
      <div className="pdf-viewer-wrapper">
         <img src={certImg} alt="NCSA Certificate" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
         <h3 className="ncsacer-text__title">
            Cybersecurity Foundation Course
         </h3>
         <p className="ncsacer-text__body">
            ประกาศนียบัตรหลักสูตรพื้นฐาน 2567:<br/> ผู้ผ่านการอบรม - หลักสูตรด้านความมั่นคงปลอดภัยไซเบอร์ระดับพื้นฐาน
         </p>
         <a
        className="cert-pdf-link"
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View/Download Certificate (PDF)
      </a>
      </div>

      
      
    </div>
  );
}

export default Certificate;