import { RouterProvider } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "pretendard/dist/web/static/pretendard.css";
import { theme } from "@styles/theme";
import { router } from "@router/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        font-family: "Pretendard", sans-serif;
    }
`;

export default App;
