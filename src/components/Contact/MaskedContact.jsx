import { useState } from 'react';
import call from '../../assets/call_icon.svg';
import './MaskedContact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SERVICE_ID = 'service_nqjdzoh';
const TEMPLATE_ID = 'template_cm42p0k';
const PUBLIC_KEY = 'zevvQDIhxQi0GS6LA';

const MaskedContact = () => {
    const [showModal, setShowModal] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', otp: '' });
    const [generatedOTP, setGeneratedOTP] = useState('');
    const [verified, setVerified] = useState(false);

    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendOTP = async () => {
        if (!formData.name || !formData.email.includes('@')) {
            toast.error("Please enter a valid name and email.");
            return;
        }

        const otp = generateOTP();
        setGeneratedOTP(otp);

        const expiryTime = new Date(new Date().getTime() + 15 * 60000).toLocaleTimeString();

        const templateParams = {
            to_name: formData.name,
            to_email: formData.email,
            otp_code: otp,
            expiry_time: expiryTime
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setStep(2);
            toast.success("OTP sent to your email.");
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Failed to send OTP. Please try again.");
        }
    };

    const handleVerifyOTP = () => {
        if (formData.otp === generatedOTP) {
            setVerified(true);
            setShowModal(false);
            toast.success("OTP verified! Contact number revealed.");
        } else {
            toast.error("Invalid OTP. Please try again.");
        }
    };

    return (
        <>
            <div className="contact-detail">
                <img src={call} alt="call" />
                {verified ? (
                    <a href="tel:+919361197246">+91 93611 97246</a>
                ) : (
                    <p className="masked-number" onClick={() => setShowModal(true)}>
                        +91 93******46 (Click to view)
                    </p>
                )}
            </div>

            {showModal && (
                <>
                    <div className="overlay"></div> {/* Dim background */}
                    <div className="otp-modal">
                        <div className="otp-box">
                            <h3>{step === 1 ? 'Request to View Number' : 'Verify OTP'}</h3>

                            {step === 1 && (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInput}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInput}
                                    />
                                    <button onClick={handleSendOTP}>Send OTP</button>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <input
                                        type="text"
                                        name="otp"
                                        placeholder="Enter OTP"
                                        value={formData.otp}
                                        onChange={handleInput}
                                    />
                                    <button onClick={handleVerifyOTP}>Verify & Reveal</button>
                                </>
                            )}

                            <button className="close-btn" onClick={() => setShowModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </>
            )}

            <ToastContainer position="top-center" />
        </>
    );
};

export default MaskedContact;
