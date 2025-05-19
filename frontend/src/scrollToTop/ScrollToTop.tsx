import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Only scroll to top if there is no hash
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return <div className="flex-1">{children}</div>;
};

export default ScrollToTop;
