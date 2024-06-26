import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import darkTheme from "./theme/DarkTheme";
import Routers from "./Routers/Routers";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
