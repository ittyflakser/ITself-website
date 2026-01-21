import { useEffect } from "react";
import { texts } from "../texts";
import "../styles/robot.css";

export default function RobotSection() {
  /** אפקט גלילת כניסה */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in");
      });
    });

    const items = document.querySelectorAll(".robot-section, .robot-text-box");
    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="robot-section">
      {/* טקסט */}
      <div className="robot-text-box glass-card neon-border">
        <h2 className="robot-title">
          🤖 <span className="selfie-highlight">סלפי</span> — המערכת שמנהלת את העסק בשבילך
        </h2>

        <p className="robot-description">
          {texts.selfie.intro}
        </p>
      </div>
    </section>
  );
}
