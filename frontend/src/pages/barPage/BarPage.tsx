import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BarType from "./BarType";

const BarPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
<div className="w-full min-h-screen flex flex-col items-center bg-black text-white overflow-x-hidden">
  <BarType id="scotch" title="scotch" targetId="beer" />
  <BarType id="rum" title="rum" targetId="vodka" />
  <BarType id="beer" title="beer" targetId="scotch" />
  <BarType id="vodka" title="vodka" targetId="rum" />
  <BarType id="cocktails" title="cocktails" targetId="beer" />
</div>

  );
};

export default BarPage;
