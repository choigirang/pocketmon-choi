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
      fontFamily: {
        pokemon: "Pokemon Solid",
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
        common:
          "rgb(237, 237, 238) 3px 3px inset, rgba(255, 255, 255, 0.5) -3px -3px inset,2px 2px 2px",
        timer: "#474747 3px 3px inset, #ededee -3px -3px inset",
        menu: "#ededee 3px 3px inset, #474747 -3px -3px inset",
        inner: "inset 3px 4px 2px 0px #777777",
      },
      colors: {},
      height: {},
      gridTemplateRows: {
        wallpaper: "80px",
      },
      gridTemplateColumns: {
        menu: "30px auto",
        wallpaper: "80px",
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
