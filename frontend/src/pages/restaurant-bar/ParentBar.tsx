import { memo } from "react";

import ChildBar from "./ChildBar";
function ParentBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2 border-b pb-3">
      <ChildBar
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/v1747669838/scotch_euynqg.jpg"
        title="scotch"
      />
      <ChildBar
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/v1747669835/rum_rpxjhh.jpg"
        title="rum"
      />
      <ChildBar
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/v1747669835/beer_e7i7dv.jpg"
        title="beer"
      />
      <ChildBar
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/v1747669835/vodka_qoemri.jpg"
        title="vodka"
      />
      <ChildBar
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/v1747669835/cocktail_bbi2lk.jpg"
        title="cocktails"
      />
    </div>
  );
}

export default memo(ParentBar);
