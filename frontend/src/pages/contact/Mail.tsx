import { useState } from "react";

const Mail = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [credentialError, setCredentialError] = useState<boolean>(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setCredentialError(false);
  };

  const handleSendEmail = () => {
    if (
      form.name.trim().length === 0 ||
      form.email.trim().length === 0 ||
      form.message.trim().length === 0
    ) {
      setCredentialError(true);
      return;
    } else {
      // Compose mailto link with subject and body from form
      const email = "hotelmahendra@gmail.com"; // Your email here
      const subject = `Booking Inquiry from ${form.name}`;

      // Construct body text with details
      const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;

      // Encode to be URL-safe
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      // Open default mail client
      window.location.href = mailtoLink;
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
        type="email"
        name="email"
        placeholder="Your Email"
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:border-red-600"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="border p-2 rounded w-full mb-3 focus:outline-none focus:border-red-600"
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
      />
      <button
        onClick={handleSendEmail}
        className="bg-red-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition delay-100 ease-in-out"
      >
        Send Email
      </button>

      {credentialError && (
        <span className="text-red-600 ml-1 text-sm font-semibold border-b border-dashed border-red-600">
          "All fields are required!!"
        </span>
      )}
    </div>
  );
};

export default Mail;
