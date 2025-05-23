import Guest from "./Guest";
export default function GuestsReviews() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-rose-400 pb-5 rounded-b-xl  md:px-28 md:pb-10">
      <Guest
        name="Aarav Mehra"
        description="“Great service! The receptionist was kind and efficient. Loved the food—especially the butter paneer and dal fry. Will stay again.”"
        bgColor="bg-blue-200"
        stars={5}
      />
      <Guest
        name="Jessica Brown"
        description="“We booked the hotel for my cousin's wedding and everything was perfect. The hall was big and well-decorated, with plenty of space for guests. The staff were helpful throughout, the receptionist was professional, and the food—every single dish—was delicious. Great experience overall!” "
        bgColor="bg-yellow-200"
        stars={4}
      />
      <Guest
        name="Ishita Singh"
        description="“I stayed here with my partner and felt completely safe. Unlike many places that don't allow unmarried couples, this hotel was respectful and professional. They verified our ID cards at check-in and treated us well throughout. The room was clean, the staff was polite, and I'd definitely recommend it to other couples looking for a safe and decent stay.”"
        bgColor="bg-green-200"
        stars={5}
      />
    </div>
  );
}
