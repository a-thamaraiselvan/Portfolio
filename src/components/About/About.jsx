import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <div className="about-title">
                    <h1>About me</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth. </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill">
                                <p>HTML & CSS</p>
                                <hr style={{ width: "90%" }} />
                            </div>
                            <div className="about-skill">
                                <p>React Js</p>
                                <hr style={{ width: "70%" }} />
                            </div>
                            <div className="about-skill">
                                <p>JavaScript</p>
                                <hr style={{ width: "80%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Next Js</p>
                                <hr style={{ width: "50%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Bootstrap</p>
                                <hr style={{ width: "65%" }} />
                            </div>
                            <div className="about-skill">
                                <p>MS 365</p>
                                <hr style={{ width: "75%" }} />
                            </div>
                            <div className="about-skill">
                                <p>Tailwind css</p>
                                <hr style={{ width: "45%" }} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="about-title">
                    <h1>Qualification</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h2>SSLC</h2>
                        <p>Government Higher Secondary School</p>
                        <p>Pannapatti, Tamil Nadu</p>
                        <p>India</p>
                        <p>2018 -2019</p>
                        <p>CGBA : <span>6/10</span></p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h2>HSLC</h2>
                        <p>Ganga Kaveri Matric.Hr.Sec School</p>
                        <p>Deevattipatti, Tamil Nadu</p>
                        <p>India</p>
                        <p>2019 - 2021</p>
                        <p>CGPA : <span>7.5/10</span></p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h2>Undergraduate</h2>
                        <h4>B.Sc - Information Technology</h4>
                        <p>Hindusthan College of arts & science</p>
                        <p>Coimbatore ,Tamil Nadu</p>
                        <p>India</p>
                        <p>2021 - 2024</p>
                        <p>CGPA : <span>8.5/10</span></p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h2>Postgraduate</h2>
                        <h4>M.Sc - Information Technology</h4>
                        <p>Hindusthan College of arts & science</p>
                        <p>Coimbatore,Tamil Nadu </p>
                        <p>India</p>
                        <p>2024 - 2026</p>
                        <p>CGPA : <span>Current</span></p>
                    </div>
                    {/* <hr /> */}
                </div>
            </div>
        </>
    )
}

export default About
