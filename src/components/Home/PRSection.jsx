import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProblemRotationSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      timeline.fromTo(
        card,
        { opacity: 0, x: index % 2 === 0 ? 100 : -100, y: 50, rotate: 10 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1.2,
          ease: "power2.out",
        }
      );
    });
  }, []);

  const problems = [
    {
      title: "Lack of Trust",
      description: "Trust issues with service providers affect reliability.",
      image: "https://illustrations.popsy.co/amber/feedback.svg",
    },
    {
      title: "Inconsistent Quality",
      description: "Services often vary in quality and outcomes.",
      image: "https://illustrations.popsy.co/amber/team-goals.svg",
    },
    {
      title: "No Real-Time Tracking",
      description: "Difficulty tracking service providers in real time.",
      image: "https://illustrations.popsy.co/amber/real-time-analytics.svg",
    },
    {
      title: "Limited Verification",
      description: "Background checks are often inadequate.",
      image: "https://illustrations.popsy.co/amber/security.svg",
    },
    {
      title: "Emergency Service Gaps",
      description: "Finding reliable emergency services is challenging.",
      image: "https://illustrations.popsy.co/amber/emergency-call.svg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-dark mb-12">
          Professional Service Challenges
        </h2>
        <div className="relative">
          <div className="space-y-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`flex flex-col md:flex-row items-center gap-8 p-6 shadow-lg bg-white rounded-2xl transform ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-primary-dark">
                    {problem.title}
                  </h3>
                  <p className="text-secondary-dark mt-4 text-lg">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemRotationSection;
