import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes";
import LazyComponentWrapper from "./LazyComponentWrapper";
import { pageview } from "./analytics";
import { lazy, Suspense, useEffect } from "react";
import Spinner from "./loaderSpinner/Spinner";
import { useLocation } from "react-router-dom";
const Footer = lazy(() => import("./components/Footer"));
export default function App() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 pt-12 md:pt-17 lg:pt-20">
        <AppRoutes />
      </div>
      <LazyComponentWrapper>
        <Suspense fallback={<Spinner />}>
          <footer className="">
            <Footer />
          </footer>
        </Suspense>
      </LazyComponentWrapper>
    </div>
  );
}
