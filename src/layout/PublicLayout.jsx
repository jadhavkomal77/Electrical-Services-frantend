import { Outlet } from "react-router-dom";
import PublicNavbar from "../pages/PublicNavbar";
import PublicFooter from "../pages/PublicFooter";


export default function PublicLayout() {
  return (
    <>
      <PublicNavbar />
      <Outlet />   
      <PublicFooter />
    </>
  );
}
