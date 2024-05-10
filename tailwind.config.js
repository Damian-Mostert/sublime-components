import colors from "./src/lib/styles/colors.json";
import screens from "./src/lib/styles/screens.json";
import sizes from "./src/lib/styles/sizes.json";
import fonts from "./src/lib/styles/fonts.json";

export default {
  mode: "jit",
  theme: {
    extend: {
      colors,
      screens,
      sizes,
      fontFamily: fonts,
    },
  },
  plugins: [],
};
