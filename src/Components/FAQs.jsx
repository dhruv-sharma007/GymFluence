import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAnswer}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span className={`transform ${isOpen ? "rotate-180" : ""}`}>
          &#9654; {/* Arrow Icon */}
        </span>
      </div>
      {isOpen && <p className="text-gray-300 mt-4">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-gray-900 py-16">
      <h2 className="text-4xl font-semibold text-center text-blue-500 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <FAQItem
          question="What are the best exercises for weight loss?"
          answer="Cardio exercises like running, cycling, and swimming are excellent for burning calories and promoting weight loss. Combining cardio with strength training helps boost metabolism and burn fat effectively."
        />
        <FAQItem
          question="How many days a week should I train?"
          answer="For most people, training 3-5 days a week is ideal. It's important to balance intense training days with rest and recovery. This allows muscles to repair and grow while reducing the risk of injury."
        />
        <FAQItem
          question="What should I eat before and after a workout?"
          answer="Before a workout, aim for a balanced meal with carbs and protein to fuel your body. After a workout, prioritize protein for muscle repair and carbohydrates to replenish glycogen stores."
        />
        <FAQItem
          question="Can I gain muscle and lose fat at the same time?"
          answer="Yes, but it can be challenging. It requires a well-balanced diet, strength training, and proper recovery. Building muscle burns more calories, which can help with fat loss over time."
        />
        <FAQItem
          question="How do I stay motivated to work out consistently?"
          answer="Setting realistic goals, tracking progress, and mixing up your routine can help keep workouts exciting. Finding a workout buddy or joining a fitness community can also add accountability and motivation."
        />
      </div>
    </div>
  );
};

export default FAQs;
