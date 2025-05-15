import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {
  const phoneNumber = "1234567890"; // Replace with your number (no + or spaces)
  const message =
    "Hello! I would like to book a room or inquire about your hotel services.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      {/* <div className="fixed bg-white rounded-full z-50 right-3 bottom-6 p-1"> */}
      <FaWhatsapp
        size={55}
        color="#25D366"
        className="fixed bg-white  rounded-full z-50 right-3 bottom-6"
      />
    </a>
  );
};

export default Whatsapp;
