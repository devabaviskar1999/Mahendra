import { useState } from "react";
interface formType {
  name: string;
  number?: number;
  message: string;
}

const Mail = () => {
  const [form, setForm] = useState<formType>({
    name: "",
    number: undefined,
    message: "",
  });

  const [credentialError, setCredentialError] = useState<boolean>(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "number" ? Number(value) : value });
    setCredentialError(false);
  };

  const handleSendEmail = () => {
    if (form.name.trim().length === 0 || form.message.trim().length === 0) {
      setCredentialError(true);
      return;
    } else {
      // Compose mailto link with subject and body from form
      const email = "hotelmahendra@gmail.com"; // Your email here
      const subject = `Booking Inquiry on website from ${form.name}`;

      // Construct body text with details
      const body = `Name: ${form.name}\nMobile Number: ${form.number}\n\nMessage:\n${form.message}`;

      // Encode to be URL-safe
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open default mail client
      window.location.href = mailtoLink;
    }
  };
  const whatsappMessage = (): undefined => {
    if (form.name.trim().length === 0 || form.message.trim().length === 0) {
      setCredentialError(true);
      return;
    } else {
      const phoneNumber = " +918087610947"; // Replace with your number (no + or spaces)
      const message = form.message;
      const encodedMessage = encodeURIComponent(message);
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.location.href = whatsappLink;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-5">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:border-red-600"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="number"
        placeholder="Your Contact Number"
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:border-red-600"
        value={form.number}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:border-red-600"
        rows={2}
        value={form.message}
        onChange={handleChange}
        required
      />
      <div className="flex flex-col gap-1">
        <article
          onClick={() =>
            setForm({ ...form, message: "I want to book a room for couple" })
          }
          className="border-2 bg-gray-200 w-fit rounded-md p-1 cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
        >
          I want to book a room for couple
        </article>
        <article
          onClick={() =>
            setForm({ ...form, message: "I have an event related query" })
          }
          className="border-2 bg-gray-200 w-fit rounded-md p-1 cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
        >
          I have an event related query
        </article>
        <article
          onClick={() =>
            setForm({
              ...form,
              message: "I want to know about corporate booking",
            })
          }
          className="border-2 bg-gray-200 w-fit rounded-md p-1 cursor-pointer hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
        >
          I want to know about corporate booking
        </article>
      </div>
      <div className="flex flex-row gap-2">
        <button
          onClick={handleSendEmail}
          className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition delay-100 ease-in-out mt-3"
        >
          Send Email
        </button>
        <button
          onClick={whatsappMessage}
          className="
      bg-green-400
      text-black px-4 py-2 rounded-lg cursor-pointer  transition delay-100 ease-in-out mt-3 md:hidden
      "
        >
          Send Whatsapp
        </button>
      </div>

      {credentialError && (
        <span className="text-red-600 ml-1 text-sm font-semibold border-b border-dashed border-red-600">
          All fields are required!!
        </span>
      )}
    </div>
  );
};

export default Mail;
