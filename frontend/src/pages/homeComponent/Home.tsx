import Coconut from "./coconut/Coconut";
import CustomerHeading from "./CustomerHeading";
import MainView from "./MainView";
import { lazy, Suspense } from "react";
const GuestsReviews = lazy(() => import("./guest-reviews/GuestsReviews"));
const MainGenre = lazy(() => import("./Main-genre"));
import LazyComponentWrapper from "../../LazyComponentWrapper";
import TopArrow from "./TopArrow";
import GenreSkeleton from "../../skeleton/GenreSkeleton";
import GuestSkeleton from "../../skeleton/GuestSkeleton";
import Offer from "../../offers/Offer";
export default function Home() {
  return (
    <div className="w-full relative">
      <MainView />
      <LazyComponentWrapper>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GenreSkeleton />
              <GenreSkeleton />
              <GenreSkeleton />
            </div>
          }
        >
          <MainGenre />
        </Suspense>
      </LazyComponentWrapper>
      <Coconut />
      <CustomerHeading />
      <LazyComponentWrapper>
        <Suspense
          fallback={
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:px-28 md:pb-10">
              <GuestSkeleton />
              <GuestSkeleton />
              <GuestSkeleton />
            </div>
          }
        >
          <GuestsReviews />
        </Suspense>
      </LazyComponentWrapper>
      <TopArrow />
      <Offer />
    </div>
  );
}
