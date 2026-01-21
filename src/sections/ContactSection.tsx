import "../styles/contact.css";
import "../styles/animations.css";
import { texts } from "../texts";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" dir="rtl">
      <div className="contact-card neon-frame animate-section glass-card">
        <h2>{texts.contact.title}</h2>
        <p>{texts.contact.email}</p>
        <p>{texts.contact.phone}</p>
      </div>
    </section>
  );
}
