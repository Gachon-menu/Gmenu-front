import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFountPage from "./pages/NotFountPage";
import RootLayOut from "./layout/RootLayout";
import TodayMenuPage from "./pages/TodayMenuPage";
import DormitoryMenuPage from "./pages/DormitoryMenuPage";
import ArmMenuPage from "./pages/ArmMenuPage";
import VisionMenuPage from "./pages/VisionMenuPage";
import { createGlobalStyle } from "styled-components";

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
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
    }
`;

export default App;
