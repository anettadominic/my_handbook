import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarContent, setSidebarContent] = useState([]);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen,setIsSidebarOpen,sidebarContent, setSidebarContent,toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
