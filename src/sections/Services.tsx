import "../styles/services.css";
import { texts } from "../texts";

export default function Services() {
  return (
    <section className="services-section snap-center">
      <h2 className="title"> השירותים שלנו </h2>

      <div className="services-grid">
        {texts.services.list.map((t, i) => (
          <div key={i} className="card neon-hover">
            <div className="icon">{t.icon}</div>
            <h3 className="card-title">{t.title}</h3>
            <p className="card-desc">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
