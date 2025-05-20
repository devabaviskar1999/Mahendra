import ChildRestaurant from "./ChildRestaurant";
import { memo } from "react";

function Restaurant() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
      <ChildRestaurant
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/c_limit,fl_lossy,q_auto,f_auto/v1747670128/veg_cvvqvi.jpg"
        title="Veg"
      />
      <ChildRestaurant
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/c_limit,fl_lossy,q_auto,f_auto/v1747670110/non-veg_t03dfe.jpg"
        title="Non-veg"
      />
      <ChildRestaurant
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/c_limit,fl_lossy,q_auto,f_auto/v1747670110/chinese_puh9hd.jpg"
        title="Chinese"
      />
      <ChildRestaurant
        imgUrl="https://res.cloudinary.com/dvc4zb2ha/image/upload/c_limit,fl_lossy,q_auto,f_auto/v1747670110/fish_pxxqsb.jpg"
        title="Fish"
      />
    </div>
  );
}

export default memo(Restaurant);
