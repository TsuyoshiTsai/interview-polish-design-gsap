// import { useState } from "react";
import "./App.css";

function App() {

  return (
    <>
      <picture class="cases-background">
        <source
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xxs.png"
          media="(max-width: 450px)"
          srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xxs.png"
        />
        <source
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-m.png"
          media="(max-width: 815px)"
          srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-m.png"
        />
        <source
          data-srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-l.png"
          media="(max-width: 1030px)"
          srcset="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-l.png"
        />
        <img
          data-src="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xl.png"
          class="js-lazy loaded"
          alt=""
          src="https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/cases/background-xl.png"
          data-was-processed="true"
        />
      </picture>
    </>
  );
}

export default App;
