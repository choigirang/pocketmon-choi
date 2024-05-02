/** @type {import('tailwindcss').Config} */
module.exports = {
  /** 2024/04/04 - calc class 설정 */
  mode: "jit",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "640px" },
        md: { min: "641px", max: "1024px" },
      },
      backgroundColor: {
        gray: "#bac3bf",
      },
      transitionProperty: {
        custom: "all", // 사용자 정의 transition 속성을 설정합니다.
      },
      transitionTimingFunction: {
        custom: "ease-in-out", // 사용자 정의 transition 타이밍 함수를 설정합니다.
      },
      transitionDelay: {
        custom: "1s", // 사용자 정의 transition 딜레이를 설정합니다.
      },
      boxShadow: {
        nav: "rgb(237, 237, 238) 3px 3px inset, rgba(255, 255, 255, 0.5) -3px -3px inset",
        timer: "#474747 3px 3px inset, #ededee -3px -3px inset",
        menu: "#ededee 3px 3px inset, #474747 -3px -3px inset",
      },
      colors: {},
      height: {},
      gridTemplateRows: {},
      gridTemplateColumns: {
        menu: "30px auto",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
    },
  },
  plugins: [],
};
