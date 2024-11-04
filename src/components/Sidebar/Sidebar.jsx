import React from "react";
import { useSidebar } from "../../context/SidebarContext";

export default function Sidebar() {
  const { isSidebarOpen, sidebarContent, toggleSidebar } = useSidebar();

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-700 text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:w-64`}
      >
        <div className="p-4 font-bold text-lg">{process.env.PROJECT_NAME}</div>
        <ul className="p-4 space-y-2">
          {sidebarContent?.map((item) => (
            <li className="hover:bg-gray-500 p-2 rounded">{item?.title}</li>
          ))}
        
        </ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => toggleSidebar()}
        className="md:hidden fixed top-4 left-4 bg-gray-600 text-white p-2 rounded focus:outline-none z-50"
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}
