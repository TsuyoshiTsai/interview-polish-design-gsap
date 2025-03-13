// import { useState } from "react";
import "./App.css";

const Wordings = "Team Taiwan! Team Taiwan! Taiwan is a great country!";

function App() {
  return (
    <main className="main">
      <div className="quote-text">{Wordings}</div>

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
