import React, { useState, useEffect } from 'react';
import '../App.css'

export default function Projects() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Mini Project: Disease Prediction Model",
      status: "Completed",
      description: "Check the github repo at the footer for complete source code",
      type: "video",
      src: "2024-05-04_00-00-10-489.mp4",
    },
    {
      title: "Mini Project: Remote Code Execution web-app",
      status: "Not Completed (20% left)",
      type: "video",
      src: "2024-05-04_11-27-50-144.mp4",
    },
    {
      title: "Full-Stack AI Project: Counsellor.AI",
      status: "Undergoing",
      type: "image",
      src: "WhatsApp Image 2024-06-22 at 2.26.05 PM (1).jpeg",
      extra: (
        <>
          <h1 className="mx-4">Welcome to My Website</h1>
          <p className="mx-4">
            Check out my{' '}
            <a
              className="hover:text-blue-500 hover:underline"
              href="https://counsellor-frontend.vercel.app/"
            >
              Counsellor Frontend
            </a>{' '}
            for more information.
          </p>
        </>
      ),
    },
    {
      title: "Simple movie-api",
      status: "Done",
      type: "image",
      src: "Screenshot 2024-06-25 141213.png",
      extra: (
        <p className="mx-4">
          Check out my{' '}
          <a
            className="hover:text-blue-500 hover:underline"
            href="https://movie-api-nine-kohl.vercel.app/"
          >
            Movie-api
          </a>{' '}
          for more information.
        </p>
      ),
    },
    {
      title: "Upcoming projects in sequence",
      content: (
        <>
          <h1 className="mx-4">5. NLP project for automatic website creation through simple voice commands</h1>
          <h1 className="mx-4">6. A coding editor which comprises of coding test contests with concepts for better learning (combination of geeksforgeeks and leetcode)</h1>
          <h1 className="mx-4">7. NLP project on creating a LLM model which can understand rich vedic and sanskrit texts</h1>
        </>
      ),
    },
  ];

  const showSlide = (i) => {
    setIndex(i);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-5xl">
        <div className="slideshow-container relative">
          <div
            className="slideshow flex transition-transform duration-500"
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="slide p-4 bg-blue-100 rounded-3xl mb-8 text-center min-w-full box-border"
              >
                <h3 className="mx-4">{slide.title}</h3>
                {slide.status && <h3 className="mx-4">Status: {slide.status}</h3>}
                {slide.description && <h3 className="mx-4">{slide.description}</h3>}
                {slide.type === 'video' ? (
                  <div className="h-60 mx-4 rounded-3xl bg-slate-500 border-2 border-slate-400 lg:h-full">
                    <video
                      className="w-full h-full rounded-3xl"
                      controls
                      autoPlay
                      loop
                      defaultPlaybackRate={2.0}
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  </div>
                ) : slide.type === 'image' ? (
                  <div className="h-60 mx-4 rounded-3xl bg-slate-500 border-2 border-slate-400 lg:h-full">
                    <img className="w-full h-full rounded-3xl" src={slide.src} alt={slide.title} />
                  </div>
                ) : (
                  slide.content
                )}
                {slide.extra}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 text-white rounded mr-2">
            Previous
          </button>
          <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 text-white rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
