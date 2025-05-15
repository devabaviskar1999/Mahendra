// import ContactForm from "./ContactForm";
import Mail from "./Mail";
import Call from "./Call";
import Instagram from "./Instagram";
import Whatsapp from "./Whatsapp";

export default function Contact() {
  return (
    <div className="mt-2 h-auto w-full bg-white p-4 flex flex-col items-center  gap-4">
      <Mail/>
     <div className="md:hidden">
      <Call/>
      <Whatsapp/>
      <Instagram/>
     </div>
    </div>
  );
}
