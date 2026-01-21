import { useEffect, useState } from "react";
import "../styles/gears.css";
import { texts } from "../texts";


export default function GearsShowcase() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // מפעיל את האנימציה
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.whenYouYouBusiness.rotationPairs.length);
        setFade(false); // מכבה את האנימציה אחרי החלפה
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const [hovering, setHovering] = useState(false);

  const phrase = texts.whenYouYouBusiness.rotationPairs[index];
  const h = time.getHours() % 12;
  const m = time.getMinutes();
  const s = time.getSeconds();

  const hourDeg = h * 30 + m * 0.5;
  const minuteDeg = m * 6;
  const secondDeg = s * 6;

  return (
    <section>

      <h2 className="title"> IT'self </h2>
      <h2 className="subtitle"> עסק גדול מתנהל בעצמו </h2>
      {/* כפתור תן לעסק להתנהל בעצמו */}
      <button 
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >  למה אתה מחכה? תן לעסק שלך להתנהל בעצמו 🚀 
      </button>

      <div className={`gears-wrapper ${hovering ? "cta-hover" : ""}`}>
        {/* RIGHT – מה אתה עושה */}
        <div className="gear">
        <span className="fixed-label">בזמן שאתה</span>{" "}
        <span className={`highlight ${fade ? "fade-once" : ""}`}>
          {phrase.you}
        </span>
          <div className="gear-emoji-wrapper">
            <span className="gear-emoji">⚙️</span>
          </div>
          <div className="into-gear-icon icon">{phrase.iconYou}</div>
        </div>

        {/* CENTER – שעון */}
        <div className="gear">
          <div className="gear-emoji-wrapper">
            <span className="gear-emoji">⚙️</span>
          </div>
          <div className="into-gear-icon icon">
            <div className="clock">
              <div
                className="clock-hand hour"
                style={{ transform: `rotate(${hourDeg}deg)` }}
              />
              <div
                className="clock-hand minute"
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              />
              <div
                className="clock-hand second"
                style={{ transform: `rotate(${secondDeg}deg)` }}
              />
            </div>
          </div>
        </div>

        {/* LEFT – מה העסק עושה */}
        <div className="gear">
        <span className="fixed-label">העסק שלך</span>{" "}
        <span className={`highlight ${fade ? "fade-once" : ""}`}>
          {phrase.business}
        </span>
          <div className="gear-emoji-wrapper">
            <span className="gear-emoji">⚙️</span>
          </div>
          <div className="into-gear-icon icon">{phrase.iconBiz}</div>
        </div>

      </div>
    </section>
  );
}
