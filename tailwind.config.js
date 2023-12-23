const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "blue-900": "#0D4088",
      "blue-800": "#033378",
      "blue-700": "#154FA1",
      "blue-500": "#3689FF",
      "white-900": "#fff",
      "white-800": "rgba(255,255,255,0.8)",
      "grey-900": "#031D41",
      "grey-600": "rgba(3,29,65, 0.6)",
      "grey-500": "#536681",
      "grey-200": "#C5C9D6",
      "grey-100": "#EFF2F6",
      "green-800": "#309860",
    },
    fontFamily: {
      "gilroy-heavy": "'Gilroy-Heavy', sans-serif",
      "gilroy-bold": "'Gilroy-Bold', sans-serif",
      "gilroy-regular": "'Gilroy-Regular', sans-serif",
      "gilroy-medium": "'Gilroy-Medium', sans-serif",
      "gilroy-ligth": "'Gilroy-Light', sans-serif",
    },
    screens: {
      ...defaultTheme.screens,
     '3xl': {'min': '1720px'},
    },
  },
  plugins: [require("flowbite/plugin")],
};
