import { useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function send(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://portfolio-backend-h1q1.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await res.json();
      setStatus(data.success ? "Message sent successfully ✅" : "Failed ❌");
    } catch {
      setStatus("Server error ⚠️ Try again later");
    }
  }

  return (
    <section id="contact" className="flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* CONTACT INFO */}
        <div className="glass p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-indigo-400">
            Contact
          </h2>

          <p className="mb-6 text-slate-800 dark:text-slate-300">
            Feel free to reach out for opportunities, collaborations,
            or any questions.
          </p>

          <div className="space-y-4 text-slate-800 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="text-indigo-600 dark:text-indigo-400" />
              <span>nayakvikas856@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-indigo-600 dark:text-indigo-400" />
              <span>+91 9XXXXXXXXX</span>
            </div>

            <div className="flex items-center gap-5 mt-6">
              <a
                href="https://github.com/Vikas1649"
                target="_blank"
                className="hover:text-indigo-600 transition"
              >
                <Github />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="hover:text-indigo-600 transition"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={send}
          className="glass p-8 sm:p-10 space-y-4"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Send a Message
          </h3>

          <input
            className="w-full p-3 rounded-lg
                       bg-slate-100 dark:bg-white/10
                       text-slate-900 dark:text-white"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="w-full p-3 rounded-lg
                       bg-slate-100 dark:bg-white/10
                       text-slate-900 dark:text-white"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            className="w-full p-3 rounded-lg
                       bg-slate-100 dark:bg-white/10
                       text-slate-900 dark:text-white"
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl
                       bg-indigo-600 text-white
                       hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center font-medium text-emerald-600 dark:text-emerald-400">
              {status}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}
