import { IoIosCall } from "react-icons/io";
const Call = () => {
  const phoneNumber = "+91 257 222 2470"; // Replace with your phone number
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bg-white rounded-full z-50 right-3 bottom-6 p-1"
    >
      <IoIosCall
        size={55}
        color="blue"
        className="fixed bg-white rounded-full z-50 right-3 bottom-22 p-1"
      />
    </a>
  );
};

export default Call;
