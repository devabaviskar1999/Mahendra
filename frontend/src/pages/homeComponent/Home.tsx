import Coconut from "./coconut/Coconut";
import MainGenre from "./Main-genre";
import MainView from "./MainView";

export default function Home() {
  return (
    <div className="w-full relative">
      <MainView />
      <Coconut />
      <MainGenre />
    </div>
  );
}
