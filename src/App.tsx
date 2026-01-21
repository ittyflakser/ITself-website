import { useEffect } from "react";
import './styles/main.css'
import "./styles/animations.css";

import RobotIntro from "./sections/RobotIntro";
import GearsShowcase from "./sections/GearsShowcase";
import DemoExamples from "./sections/DemoExamples";
import Services from "./sections/Services";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

export default function App() {

  /** ---------------- Custom Cursor ---------------- **/
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);


  /** ---------------- Full-page snapping ---------------- **/
  useEffect(() => {
    document.body.style.scrollSnapType = "y mandatory";
  }, []);


  return (
    <>
      <div id="cursor" className="custom-cursor"></div>
      <main>

        {/* גלגלי השיניים */}
        <section>
          <GearsShowcase />
        </section>

        {/* RobotIntro – הצגת סלפי */}
        <section>
          <RobotIntro />
        </section>

        {/* דוגמאות */}
        <section>
          <DemoExamples />
        </section>

        {/* השירותים */}
        <section>
          <Services />
        </section>
        
        {/* יצירת קשר */}
        <section>
          <ContactSection />
        </section>

      {/* כל הזכויות שמורות */}
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}