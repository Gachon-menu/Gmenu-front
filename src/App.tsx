import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFountPage from "./pages/NotFountPage";
import RootLayOut from "./layout/RootLayout";
import TodayMenuPage from "./pages/TodayMenuPage";

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
    ],
  },
]);

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <RouterProvider router={router} />
    </>
  );
}

// const GlobalStyle = createGlobalStyle`
//     html, body {
//         margin: 0;
//         padding: 0;
//         height: 100%;
//         width: 100%;
//     }
// `;

export default App;
