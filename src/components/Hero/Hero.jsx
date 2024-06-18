import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Thamaraiselvan A (Resume).pdf'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import ParticlesBackgrouond from '../Particle/ParticlesBackgrouond'



const Hero = () => {

    // const resumeOpen = () => {
    //     const pdfUrl = { resume };
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = "Thamaraiselvan A resume.pdf"; // specify the filename
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    const [text] = useTypewriter({
        words: ['Junior MERN Stack Developer.', 'Front-End-Developer.', 'Designer.',],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
    });
    return (
        <>

            <div className="hero" id='home'>

                <img src={profile_img} alt="profile" />
                <h1> <span>I am Thamaraiselvan </span> </h1>
                <h2 style={{ fontWeight: "bold", color: "red" }}>{text} <Cursor /></h2>
                <p>I am a frontend developer from Tamilnadu,India</p>
                <div className="hero-action">
                    <div className="hero-connect">
                        <AnchorLink className='anchor-links' offset={50} href='#contact'> Connect With me</AnchorLink>
                    </div>
                    <div className="hero-resume" >
                        <a href={resume} open='Thamaraiselvan Resume' >
                            my resume
                        </a>
                    </div>

                </div>
                <div className="hero-icons">
                    <div className="vertical"></div>
                    <div className="hero-giuhb">
                        <a href="https://github.com/a-thamaraiselvan" target='_blank'> <ion-icon name="logo-github"></ion-icon></a>
                    </div>
                    <div className="hero-linked">
                        <a href="https://www.linkedin.com/in/a-thamaraiselvan/" target='_blank'>  <ion-icon name="logo-linkedin"></ion-icon></a>
                    </div>
                    <div className="hero-insta">
                        <a href="https://www.instagram.com/smart_king_thamarai/" target='_blank'> <ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                    <div className="vertical"></div>
                </div>
            </div>
            {/* <ParticlesBackgrouond/> */}
        </>
    )
}

export default Hero
