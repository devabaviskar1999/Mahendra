// import ContactForm from "./ContactForm";
import Mail from "./Mail";
import Call from "./Call";
import Instagram from "./Instagram";
import Whatsapp from "./Whatsapp";
import Facebook from "./Facebook";

export default function Contact() {
  return (
    <div className="mt-2 h-auto w-full bg-white p-4 flex flex-col  gap-4">
      <Mail />

      <div className="md:flex md:flex-col  md:items-center relative ">
        <h2 className="hidden md:flex md:flex-col md:items-center">
          You can send Booking/Enquiry message on socials{" "}
          <span className="text-red-600">Click on below icons</span>
        </h2>

        <Call />
        <Whatsapp />
        <div className="md:flex md:flex-row ">
          <Instagram />
          <Facebook />
        </div>
      </div>
    </div>
  );
}
