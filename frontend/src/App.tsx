import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Routes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1 ">
        <AppRoutes />
      </div>
      <footer className="bg-red-800 w-full text-center">
        <Footer />
      </footer>
    </div>
  );
}
