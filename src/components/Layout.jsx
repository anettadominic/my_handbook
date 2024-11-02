import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <main>
        <Outlet /> {/* Render child routes here */}
      </main>
    </>
  );
};
export default Layout;
