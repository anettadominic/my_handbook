import { Link, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 p-4 ml-0  transition-all">
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
