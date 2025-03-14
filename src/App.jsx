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
  const quoteTextRef = React.useRef(null);

  useGSAP(
    (context, contextSafe) => {
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

      const letters = gsap.utils.toArray("span", quoteTextRef.current);
      const handleMouseMove = contextSafe((event) => {
        letters.forEach((letter) => {
          const rect = letter.getBoundingClientRect();
          const letterCenterX = rect.left + rect.width / 2;
          const letterCenterY = rect.top + rect.height / 2;

          const dx = letterCenterX - event.clientX;
          const dy = letterCenterY - event.clientY;

          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 75;

          const minDistance = 5;
          const normalizedDistance = Math.max(minDistance, distance);

          const power = Math.max(0, (maxDistance - normalizedDistance) / maxDistance);

          const angle = Math.atan2(dy, dx);
          const xOffset = Math.cos(angle) * power * 30;
          const yOffset = Math.sin(angle) * power * 30;

          const rotate = power * 10 * (dx > 0 ? 1 : -1);

          gsap.to(letter, {
            x: xOffset,
            y: yOffset,
            scale: 1 + power * 0.15,
            rotation: rotate,
            duration: 0.5,
            ease: "power1.out",
          });
        });
      });
      const handleMouseLeave = contextSafe(() => {
        gsap.to(letters, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
      });

      quoteTextRef.current?.addEventListener("mousemove", handleMouseMove);
      quoteTextRef.current?.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        quoteTextRef.current?.removeEventListener("mousemove", handleMouseMove);
        quoteTextRef.current?.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      };
    },
    { container: quoteTextRef }
  );

  return (
    <main className="main">
      <div ref={quoteTextRef} className="quote-text">
        {quoteText}
      </div>

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
