import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

function RootLayOut() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayOut;
