import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./contactMe.css";


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9ktoxoo",
        "template_wi9oqz8",
        form.current,
        "MZfu30qpkrM_Qg8zK"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Contactez-moi</h2>
      <p>N'hésitez pas à me contacter pour toute collaboration ou opportunité !</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" rows="5" required></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>

        {isSent && <p className="success">✅ Message envoyé avec succès !</p>}
      </form>
    </section>
  );
};

export default Contact;
