import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const dietPlanData = [
  { time: "5:00 AM", meal: "Early Morning", description: "Warm water with lemon and honey, detox drink." },
  { time: "7:00 AM", meal: "Breakfast", description: "Oats with fruits, almonds, and chia seeds." },
  { time: "9:00 AM", meal: "Mid-Morning Snack", description: "A handful of walnuts and green tea." },
  { time: "11:00 AM", meal: "Light Snack", description: "Fresh fruit salad with a sprinkle of chia seeds." },
  { time: "1:00 PM", meal: "Lunch", description: "Grilled chicken breast, quinoa, and steamed vegetables." },
  { time: "3:00 PM", meal: "Post-Lunch Snack", description: "Greek yogurt with flaxseeds." },
  { time: "5:00 PM", meal: "Evening Snack", description: "A small apple with peanut butter." },
  { time: "7:00 PM", meal: "Dinner", description: "Baked salmon, broccoli, and sweet potatoes." },
  { time: "9:00 PM", meal: "Pre-Bedtime Snack", description: "A glass of warm turmeric milk." },
  { time: "10:00 PM", meal: "Night", description: "A light vegetable soup to aid digestion before sleep." },
];

const DietPlan = () => {
  const timelineRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  // Scroll the timeline automatically as the user scrolls
  const handleScroll = () => {
    if (timelineRef.current && !scrolling) {
      // Start auto-scrolling after detecting page scroll
      setScrolling(true);

      const maxScroll = timelineRef.current.scrollWidth - timelineRef.current.clientWidth;
      let currentScroll = timelineRef.current.scrollLeft;

      // Scroll horizontally
      const interval = setInterval(() => {
        if (currentScroll >= maxScroll) {
          clearInterval(interval); // Stop scrolling once we reach the end
        } else {
          currentScroll += 5; // Increase the scroll position incrementally
          timelineRef.current.scrollLeft = currentScroll;
        }
      }, 16); // 16ms interval for smooth scroll (around 60fps)
    }
  };

  // Listen for scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-diet-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl text-yellow-500 font-semibold mb-4">Daily Diet Plan</h1>
          <p className="text-xl text-white">A perfect diet roadmap for your fitness journey.</p>
        </div>
      </section>

      {/* Diet Plan Timeline */}
      <section className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8 text-yellow-500">Diet Plan Roadmap</h2>

        <div className="overflow-x-auto">
          {/* Horizontal Timeline Cards */}
          <div
            ref={timelineRef}
            className="flex space-x-8 pb-8 transition-transform duration-200"
          >
            {dietPlanData.map((plan, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-72 bg-gray-800 text-white rounded-lg p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-yellow-500 mb-3">{plan.time}</h3>
                <h4 className="text-xl font-medium mb-2">{plan.meal}</h4>
                <p className="text-sm text-gray-300">{plan.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DietPlan;
