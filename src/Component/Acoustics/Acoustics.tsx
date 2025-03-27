import React from "react";

const sections = [
  {
    title: "Acoustics",
    image: `${process.env.PUBLIC_URL}/images/acoustics-photoroom.png`,
    content: "Architectural acoustics shape how we experience sound. A well-designed space enhances clarity, balance, and depth while preventing distortion, poor sound distribution, and costly corrections. Effective soundproofing ensures minimal noise interference. At Madras Acoustics, we use advanced prediction and auralization software like EASE to design optimal acoustic solutions. From recording studios to performance spaces, we blend aesthetics with acoustics to create immersive, high-quality sound environments",
    imageLeft: true, // Image on the left
  },
  {
    title: "Audio Visuals",
    image: `${process.env.PUBLIC_URL}/images/audio-visuals.png`,
    content: "Madras Acoustics delivers professional audiovisual consulting and system optimization. We integrate complex technologies seamlessly, ensuring high-quality, budget-friendly solutions. Our expertise blends technology with design, selecting the best equipment for your needs. We stay updated with the latest trends through global partnerships and provide precise cabling layouts for seamless installations. Every project undergoes thorough testing to ensure top-tier performance and long-term reliability.",
    imageLeft: false, // Image on the right
  },
  {
    title: "Room Tuning, Calibration & Optimization",
    image: `${process.env.PUBLIC_URL}/images/Tuning-Open.jpg`,
    content: "Madras Acoustics fine-tunes audio systems for clear, immersive sound. We analyze room acoustics, speaker interactions, and system performance using advanced tools. Through precise adjustments and tonal shaping, we enhance clarity, balance, and natural sound—ensuring an engaging listening experience.",
    imageLeft: true, // Image on the left
  },
];


export const Acoustics: React.FC = () => {
  return (
    <>
      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/acoustics-banner.jpg`} alt="Contact" className="hero-image" />
        <div className="hero-content">
          <h1>Engineering Acoustic Excellence</h1>
          <p>Expert engineering ensures clarity, comfort, and precision in every environment.</p>
        </div>
      </div>
    <div className="acoustics-container">
      {sections.map((section, index) => (
        <div key={index} className={`acoustic-section ${section.imageLeft ? "left" : "right"}`}>
          <div className="acoustic-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="acoustic-text">
            <h2>{section.title}</h2>
            <div className="underline"></div>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};
