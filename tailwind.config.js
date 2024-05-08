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
          "rgb(237, 237, 238) 2px 2px inset, rgba(255, 255, 255, 0.5) -2px -2px inset,1px 1px 1px",
        timer: "#474747 2px 2px inset, #ededee -2px -2px inset",
        menu: "#ededee 2px 2px inset, #474747 -2px -2px inset",
        btn: "#ededee 1px 1px inset, #474747 -1px -1px inset",
        inner: "inset 2px 3px 1px 0px #777777",
      },
      colors: {
        gray: "#7f8279",
        dark: "#818181",
      },
      height: {},
      gridTemplateRows: {
        wallpaper: "repeat(80px)",
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
