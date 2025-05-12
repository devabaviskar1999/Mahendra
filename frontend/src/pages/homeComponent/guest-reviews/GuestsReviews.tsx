import Guest from "./Guest";
import ajintha from "../../../../public/MainViewImage/ajintha.jpg";
export default function GuestsReviews() {
  return (
    <>
      <h4 className="w-full mx-auto min-h-auto text-8xl">Customer Reviews</h4>
      <Guest
        imgUrl={ajintha}
        name="Devendra Baviskar"
        description="This is the fantastic hotel, i have stayed here for 3 days on 28 oct i feel like my home Fabulous co-ordination & team works by hotel staff "
      />
      <Guest
        imgUrl={ajintha}
        name="Devendra Baviskar"
        description="This is the fantastic hotel, i have stayed here for 3 days on 28 oct i feel like my home Fabulous co-ordination & team works by hotel staff "
      />
      <Guest
        imgUrl={ajintha}
        name="Devendra Baviskar"
        description="This is the fantastic hotel, i have stayed here for 3 days on 28 oct i feel like my home Fabulous co-ordination & team works by hotel staff "
      />
    </>
  );
}
