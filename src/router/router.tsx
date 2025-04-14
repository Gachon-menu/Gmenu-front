import { createBrowserRouter } from "react-router-dom";
import NotFountPage from "@pages/NotFountPage";
import RootLayOut from "@layout/RootLayout";
import TodayMenuPage from "@pages/TodayMenuPage";
import DormitoryMenuPage from "@pages/DormitoryMenuPage";
import ArmMenuPage from "@pages/ArmMenuPage";
import VisionMenuPage from "@pages/VisionMenuPage";
import MedicalMenuPage from "@pages/MedicalMenuPage";

export const router = createBrowserRouter([
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
