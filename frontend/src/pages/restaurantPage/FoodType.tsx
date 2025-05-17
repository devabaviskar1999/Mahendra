
interface FoodTypeProps {
  imgUrl?: string[];
  title: string;
  description?: string;
  id: string;
  targetId: string;
}
const FoodType = ({ imgUrl, title, description, id , targetId } : FoodTypeProps) => {
  const handleScroll = (target: string) => {  
    // Scroll to the element when the hash changes
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth"});
      }
    }
  }
  return (
    <div id={id} className="w-full min-h-screen  " style={{
      scrollMarginTop: "100px",
    }}>
      <h1>{title}</h1>
      <button onClick={() => handleScroll(targetId)} className="hover:cursor-pointer">{targetId}</button>
    </div>
  );
};

export default FoodType;
