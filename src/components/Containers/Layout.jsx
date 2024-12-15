import {  Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import useIsIndexPage from "../../hooks/useIsIndexPage"; 
import Header from "../Header/Header";

const Layout = () => {
 const isIndexPage = useIsIndexPage();
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
     {!isIndexPage && <Sidebar />}
      
      {/* Main Content */}
      <main className="flex-1 p-4 ml-0  transition-all">
     
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
