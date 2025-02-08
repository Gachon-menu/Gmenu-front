import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFountPage from "./pages/NotFountPage";
import RootLayOut from "./layout/RootLayout";
import TodayMenuPage from "./pages/TodayMenuPage";
import DormitoryMenuPage from "./pages/DormitoryMenuPage";
import ArmMenuPage from "./pages/ArmMenuPage";
import VisionMenuPage from "./pages/VisionMenuPage";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import MedicalMenuPage from "./pages/MedicalMenuPage";
import "pretendard/dist/web/static/pretendard.css";
import { theme } from "@styles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <NotFountPage />,
    children: [
      {
        index: true,
        element: <TodayMenuPage />,
      },
      {
        path: "dormitory",
        element: <DormitoryMenuPage />,
      },
      {
        path: "arm",
        element: <ArmMenuPage />,
      },
      {
        path: "vision",
        element: <VisionMenuPage />,
      },
      {
        path: "medical",
        element: <MedicalMenuPage />,
      },
    ],
  },
]);

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
