import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  function send(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_oxjby7f",
        "onGSVe1c9frJr3lK7",
        {
          name,
          email,
          message,
        },
        "onGSVe1c9frJr3lK7"
      )
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setStatus("Failed ❌ Please try again");
        }
      );
  }

  return (
    <section id="contact" className="flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div className="glass p-8">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="mb-4">
            Feel free to reach out.
          </p>

          <p>📧 nayakvikas856@gmail.com</p>
          <p>📞 +91 9346752804</p>

          <div className="mt-4 flex gap-4">
            <a href="https://github.com/Vikas1649" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={send} className="glass p-8 space-y-4">
          <h3 className="text-2xl font-bold">Send a Message</h3>

          <input
            required
            className="w-full p-3 rounded bg-white/10"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            required
            className="w-full p-3 rounded bg-white/10"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            required
            rows={4}
            className="w-full p-3 rounded bg-white/10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-3 rounded bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-green-400 font-medium">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
