import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.scss";

import BackgroundXXS from "./assets/background-xxs.png";
import BackgroundM from "./assets/background-m.png";
import BackgroundL from "./assets/background-l.png";
import BackgroundXL from "./assets/background-xl.png";

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
      duration: 0.717,
      stagger: 0.015,
    });
  });

  return (
    <main className="main">
      <div className="quote-text">{quoteText}</div>

      <picture className="background">
        <source
          data-srcset={BackgroundXXS}
          media="(max-width: 30em)"
          srcSet={BackgroundXXS}
        />
        <source
          data-srcset={BackgroundM}
          media="(max-width: 48em)"
          srcSet={BackgroundM}
        />
        <source
          data-srcset={BackgroundL}
          media="(max-width: 64em)"
          srcSet={BackgroundL}
        />
        <img data-src={BackgroundXL} alt="background" src={BackgroundXL} />
      </picture>
    </main>
  );
}

export default App;
