# 📜 Animated Text Loader (Frontend Test)

This project implements a text loading animation inspired by [Dog Studio's "Our Cases" page](https://dogstudio.co/cases/). The animation is built using React, GSAP, and SCSS, with fine-tuned easing, stagger effects, and duration for a smooth, visually engaging experience.

## 🎥 Demo

🔗 [Live Preview](https://tsuyoshitsai.github.io/recruit/polish-design/)

## 🚀 Tech Stack

- React (UI rendering)
- GSAP (Animation library)
- SCSS (Styling)
- Bun & Vite (Development environment)

## 📂 Installation & Running the Project

1. Clone this repository:

```bash
git clone <repo-url>
cd project-folder
```

2. Install dependencies:

```bash
bun install # or npm install
```

3. Start the development server:

```bash
bun dev  # or npm run dev
```

4. Open `http://localhost:5173` in your browser.

## 🎨 Animation Design

The animation follows these key principles:

- Span Splitting: Each letter is wrapped in a `<span>` to allow independent animations.
- GSAP `.from()` Animation: Starts from an initial offset and transitions smoothly to the final position.
- Staggered Effect (`stagger: 0.015s`): Characters appear in sequence to mimic Dog Studio’s style.
- Easing (`back.out`): Adds a slight bounce to enhance the wave-like motion.
- Duration Calculation:
  Dog Studio animation runs 1.255s for 91 characters (including spaces).
  Our text contains 52 characters.
  Adjusted duration: `52 / 91 \* 1.255 ≈ 0.717s`.

### Why Not Use GSAP’s SplitText Plugin?

GSAP provides a `SplitText` plugin that automatically breaks text into characters, simplifying animation. However, it's part of the Club GSAP membership, so this project manually splits text into `<span>` elements instead.

## 📌 Future Enhancements

- Responsive Adjustments: Ensure the animation scales well on different screen sizes.
- Interactive Triggers: Add hover or scroll-based animations for a more dynamic effect.

## 👨‍💻 Author

[Patrick Tsai](https://www.cake.me/ming-hao-tsai)
