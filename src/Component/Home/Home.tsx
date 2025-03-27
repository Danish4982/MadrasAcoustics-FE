import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Vasanth",
    role: "Musicious Studio",
    image: `${process.env.PUBLIC_URL}/images/acoustic-1.jpeg`,
    stars: "★★★★★",
    text: "Vasanth's studio experience was transformed with our expert acoustic treatments and soundproofing solutions, delivering top-notch sound quality for his productions.",
  },
  {
    id: 2,
    name: "FR Johnson",
    role: "Home Studio Setup",
    stars: "★★★★",
    image: `${process.env.PUBLIC_URL}/images/acoustic-1.jpeg`,
    text: "FR Johnson upgraded his home studio with our customized acoustic solutions, ensuring a professional sound environment that meets his recording needs.",
  },
  {
    id: 3,
    name: "Paul - Sound Engineer",
    role: "Bee Studios",
    stars: "★★★★",
    image: `${process.env.PUBLIC_URL}/images/acoustic-1.jpeg`,
    text: "Paul, an experienced sound engineer, enhanced his studio’s acoustics with our solutions, achieving precision sound mixing and mastering capabilities.",
  },
  {
    id: 4,
    name: "Praveen - Drummer",
    role: "Home Studio Setup",
    stars: "★★★★★",
    image: `${process.env.PUBLIC_URL}/images/acoustic-1.jpeg`,
    text: "Praveen’s home studio was transformed into a drummer-friendly space with our soundproofing and acoustic optimization, ensuring crystal-clear beats.",
  },
  {
    id: 5,
    name: "Sharon Paul - Sound Engineer",
    role: "Hosanna Ministries",
    stars: "★★★★★",
    image: `${process.env.PUBLIC_URL}/images/acoustic-1.jpeg`,
    text: "Sharon Paul’s sound engineering at Hosanna Ministries reached new heights with our acoustic treatment, enhancing live sound clarity and recording quality.",
  },
];



export const Home = () => {
  const fullText = "Engineering Excellence in Sound & Silence";
  const [text, setText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    if (typewriterIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[typewriterIndex]);
        setTypewriterIndex(typewriterIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [typewriterIndex]);

  // Carousel Navigation
  const nextSlide = () => {
    setCarouselIndex((prev) =>
      prev + 2 < testimonials.length ? prev + 2 : 0
    );
  };

  const prevSlide = () => {
    setCarouselIndex((prev) =>
      prev - 2 >= 0 ? prev - 2 : testimonials.length - 2
    );
  };

  const homeStyle :any= {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/acoustic-1.jpeg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <>
      <div style={homeStyle}>
        <div className="home-overlay">
          <h1 className="typewriter">{text}</h1>
          <p className="static-text">
            We bring precision acoustics to life, enhancing every sonic
            experience. From home theaters to studios,
          </p>
          <p className="static-text">
            we create spaces where sound thrives.
          </p>
        </div>
      </div>


      {/* Main Container */}
      <div className="home-container mt-10 px-6 md:px-20">

        {/* About Us Section */}
        <div className="about-section">
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/images/home-page-2.jpg`} alt="About Us" />
          </div>
          <div className="about-text">
            <h1 className="logo-text">Madras Acoustics</h1>
            <h3>Sound Proofing | Space | Design</h3>
            <h2>ABOUT US</h2>
            {/* <h3 className="home-about"></h3> */}

            <p>
              At Madras Acoustics, we craft immersive soundscapes and exceptional audiovisual environments. Since 2020,
              our expertise has shaped over 100 world-class projects — from professional music studios and concert auditoriums to
              luxury hotels, vibrant nightclubs, and elite home cinemas.
            </p>
            <p>
              Our globally experienced team combines creativity and technical precision to deliver customized installations
              that meet the highest standards. By embracing emerging technologies and design innovations, we ensure every
              project offers an enhanced and memorable experience.
            </p>
            <b> "Exceptional sound design is born from expertise, innovation, and a deep understanding of acoustic principles."</b>
          </div>
        </div>

        {/* Services Section */}
        <div className="home-services-section">
          <h2 className="home-section-title">Services</h2>
          <div className="home-services-container">
            <Link to="/services/professional" className="home-card">
              <img src={`${process.env.PUBLIC_URL}/images/professional-home.jpg`} alt="Professional Services" />
              <div className="home-card-overlay">Professional Services</div>
            </Link>
            <Link to="/services/residential" className="home-card">
              <img src={`${process.env.PUBLIC_URL}/images/residential-home.jpg`} alt="Residential Services" />
              <div className="home-card-overlay">Residential Services</div>
            </Link>
          </div>
        </div>

      </div>

      <div className="testimonial-container">
        <h2 className="home-section-title">Our Clients</h2>

        <div className="carousel">
          <div className="carousel-track">
            {testimonials.slice(carouselIndex, carouselIndex + 3).map((client) => (
              <div key={client.id} className="testimonial-card">
                <div className="curve-bg"></div>

                <div className="testimonial-header">
                  <div className="logo">
                    <img src={`${process.env.PUBLIC_URL}/images/acoustic-1.jpeg`} alt="Client Logo" />
                  </div>
                  <div className="testimonial-title">
                    <h3>
                      CLIENT <span className="highlight">TESTIMONIAL</span>
                    </h3>
                    <div className="stars">{client.stars}</div>
                  </div>
                </div>

                <div className="testimonial-content">
                  <p>{client.text}</p>
                </div>

                <div className="testimonial-footer">
                  <div className="student-info">
                    <h4 className="student-name">
                    </h4>
                    <p className="student-role">{client.role}</p>
                  </div>
                  <div className="student-image">
                    <img src={client.image} alt={client.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn left" onClick={prevSlide}>{'<'}</button>
        <button className="carousel-btn right" onClick={nextSlide}>{'>'}</button>
      </div>


    </>
  );
};