import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call from '../../assets/call_icon.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const notify = () => toast.success("Succesfull send!");


    const onSubmit = async (event) => {
        event.preventDefault();
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

        if (res.success) {
            console.log(res.message);
        }
    };
    return (
        <>
           <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                            transition:Bounce
                            
                         
                            
            />

            <div className="contact" id='contact'>
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let s talk</h1>
                        <p>I am currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" />
                                <p>athamaraiselvan694@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call} alt="" />
                                <p>+91 93611 97246</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" />
                                <p>TN,India</p>
                            </div>
                        </div>
                    </div>
                    <form action="" className='contact-right' onSubmit={onSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder='Enter your name' name='name' id='name'required />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter your E-mail' required/>
                        <label htmlFor="number">Enter your Mobile No</label>
                        <input type="cell" name="number" id="number" placeholder='Enter your Mobile No' required/>
                        <label htmlFor="message">Write your message here</label>
                        <textarea name="message" id="message" rows={8}
                            placeholder='Enter your message here' required></textarea>
                        <button className='contact-submit' type='submit' onClick={notify}>Submit now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
