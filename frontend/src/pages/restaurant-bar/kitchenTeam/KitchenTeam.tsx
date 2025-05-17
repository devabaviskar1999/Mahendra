import kichenStaff from "../../../imageStore/restro-bar/kitchenStaff.jpg";
export default function KitchenTeam() {
  return (
    <div className="w-full h-auto flex flex-col gap-2 lg:gap-3 items-center p-2 lg:p-4">
      <h3 className="text-2xl md:text-4xl font-semibold  lg:p-3 lg:text-5xl  w-full">
        The Masters Behind the Magic
      </h3>
      <img
        src={kichenStaff}
        alt={kichenStaff + "image"}
        className="object-contain lg:h-130 rounded-lg border-2 border-white "
      />
    </div>
  );
}
