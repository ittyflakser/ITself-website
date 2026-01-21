import "../styles/robot.css";
import { texts } from "../texts";

export default function RobotIntro() {
  return (
    <section>  
      <div className="robot-section glass-card">

        {/* ROBOT IMAGE */}

        {/* TEXT */}
        <p className="robot-text">
          {texts.selfie.title.split("סלפי")[0]}
          <span className="title">סלפי</span>
          <pre>{texts.selfie.intro}</pre>
        </p>

      </div>
    </section>
  );
}
