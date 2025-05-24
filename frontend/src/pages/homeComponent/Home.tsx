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
import MainPageHall from "./mainPageHall/MainPageHall";
import ScrollToTop from "../../scrollToTop/ScrollToTop";
import { Helmet } from "react-helmet-async";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | React SEO Site</title>
        <meta
          name="description"
          content="Welcome to the home page of our SEO optimized React app."
        />
        <meta property="og:title" content="Home | React SEO Site" />
        <meta
          property="og:description"
          content="SEO optimized React site homepage."
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <ScrollToTop>
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
          <MainPageHall />
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
      </ScrollToTop>
    </>
  );
}
