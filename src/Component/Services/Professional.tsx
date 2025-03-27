import { useState } from "react";

const faqs = [
  { question: "Why do businesses need professional services?", answer: "We provide expert guidance, improve efficiency, and ensure compliance." },
  { question: "How do I choose the right professional service provider?", answer: "Check experience, reputation, pricing, and client reviews" },
  { question: "What are common pricing models for professional services?", answer: "Hourly rates, fixed pricing, retainers, or project-based ." },
  { question: "How is technology impacting professional services?", answer: "AI, automation, and cloud solutions are enhancing efficiency and service delivery." },
  { question: "Are professional services customized for each client?", answer: "Yes, they are tailored to meet specific business or individual needs." },
];

export const Professional = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [popupContent, setPopupContent] = useState<{ title: string; image: string; description: string } | null>(null);
  const sections = [
    { title: "Music Studios", image: `${process.env.PUBLIC_URL}/images/music-studio.png`, description: "Music Studio is more than just a room—it's a space where creativity meets precision to produce exceptional sound quality. Whether for recording, mixing, or mastering . Designed with soundproofing and acoustic treatment, music studios minimize unwanted noise and ensure crystal-clear recordings." },
    { title: "Film Mix Stages", image: `${process.env.PUBLIC_URL}/images/film-mix.png`, description: "Film Mix Stage is the heart of post-production audio, where sound is sculpted to enhance the cinematic experience. Every whisper, explosion, and musical score is meticulously balanced to create immersive, high-fidelity soundscapes. " },
    { title: "Recording Room", image: `${process.env.PUBLIC_URL}/images/song-room.jpg`, description: "Recording room is the foundation of high-quality audio production, designed to capture every note, word, and sound with absolute clarity. Whether for music, podcasts, voiceovers, or film, an acoustically optimized recording space ensures pure, professional-grade sound." },
    { title: "Commercial Theater", image: `${process.env.PUBLIC_URL}/images/theater-1.jpg`, description: "Commercial Theater is more than just a place to watch movies—it’s an immersive audiovisual experience that brings stories to life on the big screen. Designed with cutting-edge technology, commercial theaters deliver stunning visuals and breathtaking sound for audiences worldwide." },
    { title: "Cinema", image: `${process.env.PUBLIC_URL}/images/theater-2.jpg`, description: "Cinema is more than just a place to watch movies—it’s a gateway to immersive storytelling, where visuals, sound, and emotions come together to create unforgettable experiences. Modern cinemas feature 4K, IMAX, and HDR projection, delivering crystal-clear images that bring stories to life with exceptional detail and color depth." },
    { title: "Commercial", image: `${process.env.PUBLIC_URL}/images/commercial.png`, description: "Commercial spaces are purpose-built environments designed to support businesses, enhance productivity, and cater to consumer needs. From corporate offices to retail outlets, these spaces are strategically planned to optimize efficiency, accessibility, and customer engagement." }
  ];

  return (
    <>
      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/professional-bg.png`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Expert Solutions, Exceptional Results</h1>
          <p>Tailored acoustic designs for studios, offices, and commercial spaces  .</p>
        </div>
      </div>
      <div className="professional-container">
        {/* Professional Services Section */}
        <div className="service-section">
          <div className="service-content">
            <h2>Professional Services</h2>
            <div className="underline"></div>
            <p>
              Madras Acoustics fine-tunes audio systems for clear, immersive sound by optimizing them to the room’s acoustics. Using advanced tools, we analyze sound behavior, assess speaker interactions, and enhance performance.<br /><br />
              Finally, tonal shaping — is where our expertise shines. Through meticulous adjustments and expert listening, we unlock the system's full potential, ensuring the sound feels natural, engaging, and immersive. This is where the magic happens — allowing you to fully enjoy the music, dialogue, or soundtrack without distraction.
            </p>
          </div>
          <div className="service-image">
            <img src={`${process.env.PUBLIC_URL}/images/professional-service.png`} alt="Professional Service" />
          </div>
        </div>

        <div className="we-are-in-container">
          <h2>We Are In</h2>
          <div className="underline"></div>
          <div className="we-are-in-grid">
            {sections.map((section) => (
              <div
                key={section.title}
                className="we-are-in-item"
                onClick={() => setPopupContent(section)}
              >
                <img src={section.image} alt={section.title} />
                <div className="overlay">
                  <h3>{section.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {popupContent && (
            <div className="popup-overlay" onClick={() => setPopupContent(null)}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={() => setPopupContent(null)}>&times;</span>
                <div className="popup-inner">
                  <img src={popupContent.image} alt={popupContent.title} className="popup-image" />
                  <div className="popup-text">
                    <h3>{popupContent.title}</h3>
                    <p>{popupContent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
        {/* FAQ Section */}
        <div className="faq-section">
          <h2>FAQ's</h2>
          <div className="accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item">
                <button className={`accordion-title ${openIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && <div className="accordion-content">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
