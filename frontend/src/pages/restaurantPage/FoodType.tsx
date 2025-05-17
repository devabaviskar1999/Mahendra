  import ChildFoodType from "./ChildFoodType";

  interface FoodTypeProps {
    heading: string;
    title: string;
    description?: string;
    id: string;
    targetId: string;
  }
  
  const  FoodType = ({ title, description, id , targetId, heading }: FoodTypeProps) => {
  const handleScroll = (target: string) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div id={id} className="w-full min-h-screen scroll-mt-16 lg:scroll-mt-24 flex flex-col items-center bg-black text-white text-center p-2 lg:p-4">
      <h1 className="text-3xl font-bold mb-6">
     {`${heading}(${title})`}
      </h1>

      {/* Add example ChildFoodType entries */}
      <ChildFoodType
        imgUrl="https://source.unsplash.com/300x300/?food,veg"
        title="Paneer Butter Masala"
        qty="1 Plate"
        rate="199"
        ingredients="Paneer, Tomato, Butter, Cream"
        description="Rich and creamy North Indian curry with fresh paneer."
        rating={4.6}
        reviews={500}
      />

      <ChildFoodType
        imgUrl="https://source.unsplash.com/300x300/?food,noodles"
        title="Schezwan Noodles"
        qty="1 Bowl"
        rate="149"
        ingredients="Noodles, Schezwan Sauce, Veggies"
        description="Spicy and tangy noodles tossed in Schezwan sauce."
        rating={4.3}
        reviews={642}
      />

      <button
        onClick={() => handleScroll(targetId)}
        className="mt-8 px-4 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition hover:cursor-pointer delay-100 ease-in-out"
      >
        Scroll to {targetId}
      </button>
    </div>
  );
};

export default FoodType;