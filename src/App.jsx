import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.scss";

gsap.registerPlugin(useGSAP);

const Letter = (props) => (
  <span className="quote-text__letter" data-quote-text-letter {...props} />
);

const quoteText = "Team Taiwan! Team Taiwan! Taiwan is a great country!"
  .split(" ")
  .map((word, index, words) => (
    <React.Fragment key={`${word}-${index}`}>
      {index !== 0 && <>&nbsp;</>}
      {index === 0 && <Letter>“</Letter>}

      {/* NOTE: add a word container to avoid breaking words */}
      <span className="quote-text__word">
        {word.split("").map((letter, index) => (
          <Letter key={`${letter}-${index}`}>{letter}</Letter>
        ))}
      </span>

      {index === words.length - 1 && <Letter>“</Letter>}
    </React.Fragment>
  ));

console.log("quoteText", quoteText);
function App() {
  useGSAP(() => {
    gsap.from("[data-quote-text-letter]", {
      x: 80,
      y: 50,
      z: -300,
      scaleY: 0.1,
      // NOTE: use transform property to specify rotation order
      transform: "rotateX(-90deg) rotate(-35deg)",
      opacity: 0,

      ease: "back.out",
      duration: 0.8,
      stagger: 0.015,
    });
  });

  return (
    <main className="main">
      <div className="quote-text">{quoteText}</div>

      <picture className="background">
        <source
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xxs.png"
          media="(max-width: 30em)"
          srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xxs.png"
        />
        <source
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-m.png"
          media="(max-width: 48em)"
          srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-m.png"
        />
        <source
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-l.png"
          media="(max-width: 64em)"
          srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-l.png"
        />
        <img
          data-src="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xl.png"
          alt=""
          src="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xl.png"
          data-was-processed="true"
        />
      </picture>
    </main>
  );
}

export default App;
