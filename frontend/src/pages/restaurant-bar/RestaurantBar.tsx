import { lazy, Suspense } from "react";
import LazyComponentWrapper from "../../LazyComponentWrapper";
import CarousalRestroBar from "./CarousalRestroBar";
import KitchenTeam from "./kitchenTeam/KitchenTeam";
import ParentBar from "./ParentBar";
import Loader from "../../loaderSpinner/Spinner";

const ParentRestaurant = lazy(() => import("./ParentRestaurant"));
export default function Restaurant() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-black text-white text-center">
      <CarousalRestroBar />

      <h1 className="text-3xl md:text-4xl font-semibold p-2 lg:p-3 lg:text-5xl border-b w-full">
        Restaurent
      </h1>
      <LazyComponentWrapper>
        <Suspense fallback={<Loader />}>
          <ParentRestaurant />
        </Suspense>
      </LazyComponentWrapper>
      <h1 className="text-3xl md:text-4xl font-semibold p-2 lg:p-3 lg:text-5xl border-b w-full">
        Bar
      </h1>
      <LazyComponentWrapper>
        <Suspense fallback={<Loader />}>
          <ParentBar />
        </Suspense>
      </LazyComponentWrapper>
      <LazyComponentWrapper>
        <Suspense fallback={<Loader />}>
          <KitchenTeam />
        </Suspense>
      </LazyComponentWrapper>
    </div>
  );
}
