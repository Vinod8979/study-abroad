import React from 'react';

const PartnerLogo = ({ src, alt }) => (
  <div className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
    <img 
      src={src} 
      alt={alt}
      className="max-h-16 w-auto object-contain"
    />
  </div>
);

const PartnersSection = () => {
  const partners = [
    { src: "/partners/ucl-logo.jpg", alt: "UCL Logo" },
    { src: "/partners/Manchester-logo.webp", alt: "University of Manchester Logo" },
    { src: "/partners/bringham.png", alt: "University of Birmingham Logo" },
    { src: "/partners/leeds go.jpg", alt: "University of Leeds Logo" },
    { src: "/partners/sheffield logo.gif", alt: "University of Sheffield Logo" },
    { src: "/partners/southampton.png", alt: "University of Southampton Logo" },
    { src: "/partners/Strathclyde.png", alt: "University of Strathclyde Logo" },
    { src: "/partners/kings.png", alt: "King's College London Logo" },
    { src: "/partners/exeter.png", alt: "University of Exeter Logo" },
    { src: "/partners/cardiff.png", alt: "Cardiff University Logo" },
    { src: "/partners/warwick.png", alt: "University of Warwick Logo" },
    { src: "/partners/lough.png", alt: "Loughborough University Logo" },
    { src: "/partners/andrews.png", alt: "University of St Andrews Logo" },
    { src: "/partners/sussex.png", alt: "University of Sussex Logo" },
    { src: "/partners/nottingham.png", alt: "University of Nottingham Logo" },
    { src: "/partners/aberdeen.png", alt: "University of Aberdeen Logo" },
    { src: "/partners/bath.png", alt: "University of Bath Logo" },
    { src: "/partners/york.png", alt: "University of York Logo" },
    { src: "/partners/liverpool.png", alt: "University of Liverpool Logo" },
    { src: "/partners/durham.png", alt: "Durham University Logo" }
  ];

  return (
    <section className="py-16 bg-white mt-2 rounded-[10px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">PARTNERS</h2>
          <h3 className="text-2xl font-bold mb-8">Leading universities and SI-UK partners</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <PartnerLogo 
              key={index}
              src={partner.src}
              alt={partner.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;