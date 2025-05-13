import entrance from "../imageStore/MainViewImage/entrance.avif";
import reception01 from "../imageStore/MainViewImage/reception01.avif";
import reception02 from "../imageStore/MainViewImage/reception02.avif";
import marriageArea from "../imageStore/MainViewImage/marriage-area.avif";
import restaurant from "../imageStore/MainViewImage/restaurant.avif";
import receptionToRoomView from "../imageStore/MainViewImage/reception-to-room-view.jpg";
import ajintha from "../imageStore/MainViewImage/ajintha.jpg";

type ImageType = {
  imgUrl: string;
  alt: string;
};
export const MainViewImage: ImageType[] = [
  {
    imgUrl: entrance,
    alt: "Hotel mahendra jalgaon entrance",
  },
  {
    imgUrl: reception01,
    alt: "Hotel mahendra jalgaon reception01",
  },
  {
    imgUrl: reception02,
    alt: "Hotel mahendra jalgaon reception02",
  },
  {
    imgUrl: marriageArea,
    alt: "Hotel mahendra jalgaon marriage area",
  },
  {
    imgUrl: restaurant,
    alt: "Hotel mahendra jalgaon restaurant",
  },
  {
    imgUrl: receptionToRoomView,
    alt: "Hotel mahendra jalgaon room view from reception",
  },
  {
    imgUrl: ajintha,
    alt: "nearby place image",
  },
];
