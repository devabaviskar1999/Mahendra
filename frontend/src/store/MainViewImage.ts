import reception01 from "../imageStore/MainViewImage/reception01.avif";
import marriageArea from "../imageStore/MainViewImage/marriage-area.avif";
import restaurant from "../imageStore/MainViewImage/restaurant.avif";
import receptionToRoomView from "../imageStore/MainViewImage/reception-to-room-view.jpg";
import AjinthaNew from "../imageStore/MainViewImage/AjinthaNew.jpg";
import Drinks2 from "../imageStore/MainViewImage/Drinks2.jpg";
import Drinks from "../imageStore/MainViewImage/Drinks.jpg";

type ImageType = {
  imgUrl: string;
  alt: string;
};
export const MainViewImage: ImageType[] = [
  {
    imgUrl: reception01,
    alt: "Hotel mahendra jalgaon reception01",
  },
{
  imgUrl: Drinks,
  alt: "Drinks image",
},
  {
    imgUrl: restaurant,
    alt: "Hotel mahendra jalgaon restaurant",
  },
  {
    imgUrl: Drinks2,
    alt: "Drinks image",
  },

  {
    imgUrl: marriageArea,
    alt: "Hotel mahendra jalgaon marriage area",
  },
  {
    imgUrl: receptionToRoomView,
    alt: "Hotel mahendra jalgaon room view from reception",
  },
  {
    imgUrl: AjinthaNew,
    alt: "nearby place image",
  },
];
