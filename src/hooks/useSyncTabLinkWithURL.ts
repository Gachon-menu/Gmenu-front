import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTabLinkStore } from "@store/useTabStore";

export const useSyncTabLinkWithURL = () => {
  const location = useLocation();
  const setTabLink = useTabLinkStore((state) => state.setTabLink);

  useEffect(() => {
    console.log("Current URL:", location.pathname);
    setTabLink(location.pathname);
  }, [location.pathname, setTabLink]);
};
