import { memo } from "react";
import beer from "../../imageStore/restro-bar/alcohol-bottles/beer.jpg";
import whisky from "../../imageStore/restro-bar/alcohol-bottles/whisky.jpg";
import rum from "../../imageStore/restro-bar/alcohol-bottles/rum.jpg";
import vodka from "../../imageStore/restro-bar/alcohol-bottles/vodka.jpg";
import cocktails from "../../imageStore/restro-bar/alcohol-bottles/cocktails.jpg";
import ChildBar from "./ChildBar";
function ParentBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2 border-b pb-3">
      <ChildBar imgUrl={whisky} title="Whisky" />
      <ChildBar imgUrl={rum} title="Rum" />
      <ChildBar imgUrl={beer} title="Beer" />
      <ChildBar imgUrl={vodka} title="Vodka" />
      <ChildBar imgUrl={cocktails} title="Cocktails" />
    </div>
  );
}

export default memo(ParentBar);
