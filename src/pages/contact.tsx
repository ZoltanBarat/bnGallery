import React, { useState, useContext } from "react";
import PageLayout from "../components/PageLayout";
import { AppContext } from "../context";
import "./contact.css";

const ContactPage = () => {
  const theme = useContext(AppContext);
  const [formSent, setFormSent] = useState(false);
  return (
    <PageLayout>
      <main>
        <div className="contact-form-wrapper">
          {formSent ? (
            <div className="contact-form-success-text"><p>Thank you! ✉</p></div>
          ) : (
            <form className="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={() => setFormSent(true)}>
              <input type="hidden" name="form-name" value="contact" />

              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name" required/>

              <label htmlFor="email">Your Email</label>
              <input id="email" type="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea rows={6} id="message" name="message" required></textarea>

              <button type="submit" >
                Send
              </button>
            </form>
          )}
        </div>
      </main>
    </PageLayout>
  );
};

export const Head = () => <title>Contact page</title>;

export default ContactPage;
