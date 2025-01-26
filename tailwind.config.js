/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      spacing: {
        98: "590px",
        99: "240px",
        100: "25px",
        101: "89px",
        102: "100%",
        103: "500px",
        104: "200px",
        105: "180px",
        106: "10px",
        107: "160px",
      },
      colors: {
        bord: "#bdbdbd",
        epl: "#38003C",
        spain: "#E00C1A",
        ita: "#024494",
        fra: "#DAE025",
        dhover: "#354464",
        lhover: "#EFEFEF",
      },
      fontSize: {
        xxs: "8px",
      },
      inset: {
        37: "30%",
      },
    },
  },
};
