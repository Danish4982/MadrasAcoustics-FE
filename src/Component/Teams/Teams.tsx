import React from "react";
const teamMembers = [
  { name: "Prasanna ", role: "Acoustics Advisor", image: `${process.env.PUBLIC_URL}/images/prasanna.jpg`,about: "Bringing years of expertise, Prasanna provides strategic guidance on acoustic design, ensuring top-tier sound quality in every project." },
  { name: "Danish", role: "Chief Sound Engineer", image: `${process.env.PUBLIC_URL}/images/danish.jpg`,about: "Leading the sound engineering division, Danish specializes in advanced acoustic treatments, soundproofing, and system optimization for diverse spaces." },
  { name: "Raju", role: "Senior Sound Engineer", image: `${process.env.PUBLIC_URL}/images/raju.jpg`,about: "With extensive experience in audio engineering, Raju focuses on designing and implementing high-performance acoustic solutions."},
  { name: "Deepak", role: "Lead Technician & CAD Designer", image: `${process.env.PUBLIC_URL}/images/deepak.jpg`,about: "Deepak combines technical expertise with CAD design, creating precise blueprints and layouts for seamless acoustic execution."},
  { name: "Jafrin Reena", role: "Administrative Manager", image: `${process.env.PUBLIC_URL}/images/jafrin.jpg`,about: "Overseeing operations and project coordination, Jafrin ensures smooth execution of all administrative and client management tasks" },
  { name: "Lokesh Kannan", role: "Software Developer", image:`${process.env.PUBLIC_URL}/images/lokesh.jpg`,about: "A skilled software developer, specializes in building robust and efficient applications" },
  { name: "Vijayalakshmi", role: "Software Developer", image: `${process.env.PUBLIC_URL}/images/vijayalakshmi.jpg`,about: "With a passion for software development, focuses on creating intuitive and high-performance applications." },
];

export const Teams: React.FC = () => {
  const bannerStyle :any= {
    background: `url(${process.env.PUBLIC_URL}/images/team-banner.jpg) no-repeat center center/cover`,
    width: "100%",
    height: "400px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <>
    {/* <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/team-banner.jpg`} alt="Contact" className="hero-image" />
        <div className="team-content">
        <h1>Meet the Minds Behind the Sound</h1>
        <p>Our expert team delivers precision, innovation, and excellence in every sound. Reach out to collaborate with us!</p>
        </div>
      </div> */}

      <div className="teams-banner-container" style={bannerStyle}>
        <div className="team-overlay">
        <div className="team-content">
        <h1>Meet the Minds Behind the Sound</h1>
        <p>Our expert team delivers precision, innovation, and excellence in every sound. Reach out to collaborate with us!</p>
        </div>
        </div>
      </div>
    <div className="teams-container">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/images/about-us-banner.jpg`} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
           Madras Acoustics - craft immersive soundscapes and exceptional audiovisual environments. Since 2020, 
                    our expertise has shaped over 100 world-class projects from professional music studios and concert auditoriums to 
                    luxury hotels, vibrant nightclubs, and elite home cinemas.

                    Our globally experienced team combines creativity and technical precision to deliver customized installations 
                    that meet the highest standards. By embracing emerging technologies and design innovations, we ensure every 
                    project offers an enhanced and memorable experience.<br/><br/>
                    <b> "Exceptional sound design is born from expertise, innovation, and a deep understanding of acoustic principles."</b><br/><br/>
            
          </p>
        </div>
      </div>

     {/* Our Team Section */}
     <div className="team-section">
        <h2>OUR TEAM</h2>
        <div className="underline"></div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img src={member.image} alt={member.name} className="team-img" />
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <h5>{member.name}</h5>
                    <br/>
                    <p className="flip-role">{member.role}</p>
                    <p className="flip-about">{member.about}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </>
  );
};





