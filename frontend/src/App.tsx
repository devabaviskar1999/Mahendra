import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes";
import LazyComponentWrapper from "./LazyComponentWrapper";
import { lazy, Suspense } from "react";
import Spinner from "./loaderSpinner/Spinner";
const Footer = lazy(() => import("./components/Footer"));
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
        <div className="flex-1 pt-12 md:pt-17 lg:pt-20">
          <AppRoutes />
        </div>
      <LazyComponentWrapper>
        <Suspense fallback={<Spinner/>}>
          <footer className="">
            <Footer />
          </footer>
        </Suspense>
      </LazyComponentWrapper>
    </div>
  );
}
