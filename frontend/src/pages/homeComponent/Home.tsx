import Coconut from "./coconut/Coconut";
import GuestsReviews from "./guest-reviews/GuestsReviews";
import MainGenre from "./Main-genre";
import MainView from "./MainView";

export default function Home() {
  return (
    <div className="w-full relative">
      <MainView />
      <Coconut />
      <MainGenre />
      <GuestsReviews />
    </div>
  );
}
