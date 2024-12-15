import { useLocation } from "react-router-dom";

const useIsIndexPage = () => {
  const { pathname } = useLocation();
  return pathname === "/" || pathname === "/not-found";
};

export default useIsIndexPage;