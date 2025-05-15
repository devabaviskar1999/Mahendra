// import ContactForm from "./ContactForm";

import Whatsapp from "./Whatsapp";

export default function Contact() {
  return (
    <div className="mt-2 h-auto w-full bg-white p-4 flex flex-col items-center  gap-4">
      <h1 className="text-3xl font-bold text-red-600">Contact Us</h1>
      {/* <ContactForm /> */}
      <Whatsapp/>
    </div>
  );
}
