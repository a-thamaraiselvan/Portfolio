import { useState } from 'react';
import './Contact.css';
import MaskedContact from './MaskedContact'; // Adjust path as needed

import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);  // Track submission state

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);  // Disable the button on submit

        const formData = new FormData(event.target);
        formData.append("access_key", "53813826-29d0-4085-ae80-0b4b53971fbe");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        setIsSubmitting(false);  // Re-enable the button after the request finishes

        if (res.success) {
            toast.success("Message sent successfully!");
            event.target.reset();
        } else {
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={4000} theme="colored" />

            <section className="contact" id="contact">
                <div className="contact-title">
                    <h1>Get in Touch</h1>
                    <img src={theme_pattern} alt="pattern" />
                </div>

                <div className="contact-section">
                    <div className="contact-left">
                        <h2>Let's Talk</h2>
                        <p>I’m available for freelance work or full-time roles. Let’s collaborate on something amazing together!</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="email" />
                                <a href="mailto:athamaraiselvan694@gmail.com">
                                    <p>athamaraiselvan694@gmail.com</p>
                                </a>
                            </div>
                            <MaskedContact />
                            <div className="contact-detail">
                                <img src={location_icon} alt="location" />
                                <p>TN, India</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-right" onSubmit={onSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required />

                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required />

                        <label htmlFor="number">Your Mobile No</label>
                        <input type="tel" name="number" id="number" placeholder="Enter your mobile number" required />

                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" id="message" rows="6" placeholder="Write your message here..." required></textarea>

                        <button className="contact-submit" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Submit Now"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
