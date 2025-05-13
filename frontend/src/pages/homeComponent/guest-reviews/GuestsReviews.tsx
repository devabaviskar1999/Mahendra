import Guest from "./Guest";
// import men from "../../../../public/customerImage/male.jpg";
// import women1 from "../../../../public/customerImage/women1.jpg";
// import women2 from "../../../../public/customerImage/women2.jpg";
export default function GuestsReviews() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-red-100 sm:bg-yellow-900/30  md:px-28 md:pb-10">
  
      <Guest
        
        name="Aarav Mehra"
        description="This is the fantastic hotel, i have stayed here for 3 days on 28 oct i feel like my home Fabulous co-ordination & team works by hotel staff "
        bgColor="bg-blue-200"
        stars={5}
      />
      <Guest
      
        name="Jessica Brown"
        description="This is the fantastic hotel, i have stayed here for 3 days on 28 oct i feel like my home Fabulous co-ordination & team works by hotel staff "
        bgColor="bg-yellow-200"
        stars={4}
      />
      <Guest
      
        name="Ishita Singh"
        description="This is the fantastic hotel, i have stayed here for 3 days on 28 oct i feel like my home Fabulous co-ordination & team works by hotel staff "
        bgColor="bg-green-200"
        stars={5}
      />
    </div>
  );
}
