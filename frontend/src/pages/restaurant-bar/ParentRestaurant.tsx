import ChildRestaurant from "./ChildRestaurant";
import chineseDish from "../../imageStore/restro-bar/food-dishes/chineseDish.jpg";
import vegDish from "../../imageStore/restro-bar/food-dishes/vegDish.jpg";
import nonVegDish from "../../imageStore/restro-bar/food-dishes/nonVegDish.jpg";
import fishDish from "../../imageStore/restro-bar/food-dishes/fishDish.jpg";
import { memo } from "react";
function Restaurant() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
      <ChildRestaurant imgUrl={vegDish} title="Veg" />
      <ChildRestaurant imgUrl={nonVegDish} title="Non-veg" />
      <ChildRestaurant imgUrl={chineseDish} title="Chinese" />
      <ChildRestaurant imgUrl={fishDish} title="Fish" />
    </div>
  );
}
export default memo(Restaurant);
