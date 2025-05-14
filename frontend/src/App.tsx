import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 pt-12 md:pt-17 lg:pt-20">
        <AppRoutes />
      </div>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
