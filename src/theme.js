import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      default: "#E7DED1",
      paper: "#ffffff",
    },
    text: {
      primary: "#2C2A28",
    },
  },
  site: {
    photographyBg: "#E7DED1",
    photographyText: "#2C2A28",
    engineeringBg: "#282A36",
    engineeringText: "#F8F8F2",
    splitBorder: "#d6ccbf",
  },
});

export default theme;