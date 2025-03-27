import React from "react";

const softwareSections = [
  {
    title: "AFMG",
    image: `${process.env.PUBLIC_URL}/images/afmg.png`,
    content: "EASE 5 isn’t just a tool—it’s the global standard for transforming spaces with precision acoustics. Powered by Innovation - With support from 140+ leading loudspeaker manufacturers, EASE 5 ensures seamless sound integration across industries. Adaptive & Customizable - Fine-tune acoustics effortlessly with a versatile material library, tailored manually or enhanced through SoundFlow. From concert halls to boardrooms, EASE 5 delivers unparalleled modeling, simulation, and auralization because sound should be experienced, not just heard",
    imageLeft: true,
  },
  {
    title: "SOUND FLOW",
    image: `${process.env.PUBLIC_URL}/images/sound-flow.jfif`,
    content: "SoundFlow is a powerful simulation tool designed to analyze and optimize sound behavior in multi-layer structures. Advanced Sound Control - Calculate absorption, reflection, and transmission with unmatched accuracy. Versatile Structural Modeling - Effortlessly design walls, floors, and ceilings by customizing layer materials and thickness to meet your exact needs. Seamless with EASE or Standalone Power - While the perfect companion for EASE software, SoundFlow also delivers exceptional results as an independent solution.",
    imageLeft: false,
  },
  {
    title: "REFLEX",
    image: `${process.env.PUBLIC_URL}/images/Reflex Splash.avif`,
    content: "Reflex is a cutting-edge 2D acoustics simulation tool designed to model how sound waves reflect, diffuse, and scatter across complex geometries. Precision Sound Modeling - Simulate sound interactions with custom-defined structures to achieve optimal acoustic performance.  Tailored for Any Space - Analyze and refine reflection and diffusion patterns for walls, ceilings, and architectural elements.  Seamless with EASE or Standalone Excellence -  Designed to work flawlessly with EASE software yet powerful enough to deliver results on its own.",
    imageLeft: true,
  },
  {
    title: "INSUL",
    image: `${process.env.PUBLIC_URL}/images/sound-wizard-insul.avif`,
    content: "INSUL is a powerful acoustic prediction tool designed to evaluate and enhance sound isolation across various structures. Comprehensive Noise Control - Accurately predict transmission loss, impact sound, and rain noise for walls, floors, roofs, ceilings, and windows. Advanced Acoustic Insights - Assess key performance metrics like Sound Transmission Class (STC/Rw), Impact Insulation Class (IIC), and LnTw ratings with ease.  Optimize Every Structure -  From residential buildings to industrial projects, INSUL helps create quieter, more acoustically efficient spaces.",
    imageLeft: false,
  },
  {
    title: "SYSTUNE",
    image: `${process.env.PUBLIC_URL}/images/systune.jfif`,
    content: "SysTune is an advanced audio measurement software designed to capture and process full-length impulse responses in real time with exceptional accuracy. Unmatched Measurement Quality - Delivering precise, high-resolution data for professional audio analysis. Designed for Efficiency - Packed with unique features to streamline workflows, making a technician’s job faster and easier. Optimize Sound Like Never Before - From live events to studio setups, SysTune ensures accurate, real-time acoustic assessment for flawless audio performance.",
    imageLeft: true,
  },
];

export const Software: React.FC = () => {
  return (
    <>

      <div className="hero-section">
        <img src={`${process.env.PUBLIC_URL}/images/software-banner.jpg`} alt="Contact" className="hero-image" />
        <div className="software-content">
          <h1>Powering Sound with Precision</h1>
          <p>We use cutting-edge software to design, analyze, and perfect acoustics, ensuring the highest quality in every project.</p>

        </div>
      </div>
      <div className="software-container">

        {softwareSections.map((section, index) => (
          <div key={index} className={`software-section ${section.imageLeft ? "left" : "right"}`}>
            <div className="software-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="software-text">
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

