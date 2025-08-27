import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/Thamaraiselvan.pdf';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

const charset = '!@#$%^&*()_+-=[]{}|;:",.<>?/';

const CyberText = ({ text, speed = 50 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            let scrambleCount = 0;
            const scrambleInterval = setInterval(() => {
                const randomChar = charset[Math.floor(Math.random() * charset.length)];
                setDisplayText((prev) => prev.slice(0, currentIndex) + randomChar);
                scrambleCount++;

                if (scrambleCount > 5) {
                    clearInterval(scrambleInterval);
                    setDisplayText((prev) => prev.slice(0, currentIndex) + text[currentIndex]);
                    setCurrentIndex(currentIndex + 1);
                }
            }, speed);

            return () => clearInterval(scrambleInterval);
        }
    }, [currentIndex, text, speed]);

    return <div className="cyber-text">{displayText}</div>;
};

const Hero = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const [text] = useTypewriter({
        words: ['Junior MERN Stack Developer.', 'Front-End Developer.', 'Designer.'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <div className="hero" id='home'>
            <div className="theme-toggle-wrapper">
                {/* ThemeToggle can be re-added here if needed */}
            </div>
            <img src={profile_img} alt="profile" />
            <h1 className="hero-title">
                <CyberText text="Hi I'm Thamaraiselvan" />
            </h1>
            {animationComplete && (
                <h2 style={{ fontWeight: "bold", color: "red" }}>{text} <Cursor /></h2>
            )}

            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-links' offset={50} href='#contact'> Connect With me</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href={resume} target='_blank' rel="noreferrer">
                        My Resume
                    </a>
                </div>
            </div>
            <div className="hero-icons">
                <div className="vertical"></div>
                <a href="https://github.com/a-thamaraiselvan" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/a-thamaraiselvan/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://www.instagram.com/smart_king_thamarai/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <div className="vertical"></div>
            </div>

        </div>
    );
};

export default Hero;
