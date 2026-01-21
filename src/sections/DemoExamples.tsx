import { useEffect, useState } from "react";
import "../styles/examples.css";
import { texts } from "../texts";


export default function DemoExamples() {
  const [index, setIndex] = useState(0);

  /** החלפה מתוזמנת של הדוגמאות */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.examples.list.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <h2 className="title">{texts.examples.title}</h2>
      <div className="examples-container glass-card neon-border animate-in">
        <div key={index} className="example-text fade-example">
          <div className="icon">{texts.examples.list[index].icon}</div>
          <pre className="example-content">{texts.examples.list[index].text}</pre>
        </div>
      </div>
    </section>
  );
}
