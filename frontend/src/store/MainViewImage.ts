import entrance from "../../public/MainViewImage/entrance.avif";
import reception01 from "../../public/MainViewImage/reception01.avif";
import reception02 from "../../public/MainViewImage/reception02.avif";
import marriageArea from "../../public/MainViewImage/marriage-area.avif";
import restaurant from "../../public/MainViewImage/restaurant.avif";
import receptionToRoomView from "../../public/MainViewImage/reception-to-room-view.jpg";
import ajintha from "../../public/MainViewImage/ajintha.jpg";

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
