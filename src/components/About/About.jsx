import './About.css'
import './Skills.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.jpg';



const skillsData = {
  "Frontend Technologies": ["HTML / CSS", "JavaScript", "React JS", "Bootstrap", "Tailwind CSS"],
  "Backend Technologies": ["Node JS", "Express JS", "Python", "Java"],
  "Databases": ["MySQL", "MongoDB"],
  "Tools & Others": ["Git & GitHub", "Firebase", "Postman", "Jasper Report"]

};

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
  <p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    I am a passionate Full Stack Developer currently pursuing my M.Sc. IT 
    and building skills in both MERN Stack and Java Full Stack development. 
    Through my internship at ProfitStory.ai and multiple academic projects, 
    I have gained hands-on experience in creating responsive, user-focused web applications.
  </p>
  <p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    I approach every project with curiosity, attention to detail, and a commitment 
    to writing clean, efficient code that solves real-world problems.
  </p>
</div>


                        <div className="skills-container">
                            {Object.entries(skillsData).map(([category, skills]) => (
                                <div key={category} className="skill-card">
                                    <h3>{category}</h3>
                                    <ul>
                                        {skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="about-title">
                    <h1>Qualification</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h2>Undergraduate</h2>
                        <h4>B.Sc - Information Technology</h4>
                        <p>Hindusthan College of arts & science</p>
                        <p>Coimbatore ,Tamil Nadu</p>
                        <p>India</p>
                        <p>2021 - 2024</p>
                        <p>CGPA : <span>7.9/10</span></p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h2>Postgraduate</h2> <span>(Pursuing)</span>
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
