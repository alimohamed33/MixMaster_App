import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
}
export default AppLayout;
