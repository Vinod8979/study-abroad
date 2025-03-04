'use client';
import React, { useEffect, useState } from 'react';

const services = [
  {
    title: "Student Counseling",
    image: "/Student-Counseling.jpg",
    description: "Student counseling provides essential support to help individuals navigate academic, personal, and emotional challenges. It empowers students to build resilience, improve mental well-being, and achieve their full potential."
  },
  {
    title: "Visa Counseling",
    image: "/visa-counseling.png",
    description: "Visa counseling guides individuals through the complex process of obtaining the necessary documentation for studying, working, or traveling abroad. It ensures applicants meet all requirements and increases their chances of a successful visa application."
  },
  {
    title: "Choose Best University",
    image: "choosing-university.png",
    description: "Choosing the right university is a crucial step towards shaping your future. Consider factors such as academic programs, campus life, and career opportunities to find the best fit for your goals."
  },
  {
    title: "Student Guide",
    image: "student-guide.png",
    description: "A student guide offers insights and practical tips to help students navigate their academic journey. It covers essential topics like time management, study techniques, and campus resources."
  },
  {
    title: "24/7 Call Services",
    image: "call-service.png",
    description: "Our 24-hour call service ensures that assistance is available whenever you need it. Whether it's an urgent query or routine support, we are here to help, day or night."
  }
];

const ServicesSection = () => {
  const [isTabView, setIsTabView] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsTabView(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', updateView);
    updateView(); // Check initial view

    return () => window.removeEventListener('resize', updateView);
  }, []);

  return (
    <section id="services" className="pt-16 px-4">
      <h2 className="text-xl md:text-2xl font-bold container max-w-9xl mx-auto px-6 lg:px-12">Services</h2>
      <div className="py-4 bg-stone-50">
      <div className='container max-w-9xl mx-auto px-6 lg:px-12'>
        {/* Desktop & Tab View */}
        <div className={`hidden ${isTabView ? 'md:grid-cols-2' : 'md:grid-cols-3'} md:grid gap-6`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-lg font-bold text-black">{service.title}</h3>
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-md my-3" />
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Stacked View */}
        <div className="md:hidden space-y-4 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg bg-white shadow-sm"
            >
              <h3 className="text-lg font-bold text-black">{service.title}</h3>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-32 object-cover rounded-md my-2" 
              />
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;