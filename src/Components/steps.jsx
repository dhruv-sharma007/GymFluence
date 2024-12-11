import React from "react";
import { motion } from "framer-motion";
import { FaRunning, FaWeightHanging, FaClipboardList, FaChartLine, FaAppleAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Import intersection observer

const Step = ({ title, icon, description, isReversed }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when the element comes into view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref} // Attach the ref to the element
      className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 px-4 md:px-0"
      initial={{ opacity: 0, x: isReversed ? 200 : -200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : isReversed ? 200 : -200 }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
    >
      <div className="w-full md:w-1/2">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">{title}</h3>
          <div className="text-4xl text-orange-500 mb-4">{icon}</div>
          <p className="text-gray-300 mb-4">{description}</p>
          <p className="text-gray-500">
            Follow this step to ensure you stay on track towards your fitness goals.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const GymSteps = () => {
  return (
    <div className="bg-gray-900 text-white">
      <h2 className="text-4xl font-semibold text-center py-12">How to Get Started with GymFluence</h2>

      {/* Step 1 */}
      <Step
        title="Step 1: Login"
        icon={<FaRunning />}
        description="Start by logging into GymFluence. The intuitive dashboard will help you access all features instantly."
        isReversed={false}
      />

      {/* Step 2 */}
      <Step
        title="Step 2: Log Your Exercises"
        icon={<FaWeightHanging />}
        description="Record your workouts every day. Track your exercise routine to keep a log of your progress."
        isReversed={true}
      />

      {/* Step 3 */}
      <Step
        title="Step 3: Count Your Reps"
        icon={<FaClipboardList />}
        description="Focus on counting your reps for each exercise to improve your strength and consistency."
        isReversed={false}
      />

      {/* Step 4 */}
      <Step
        title="Step 4: Track Your Activity"
        icon={<FaChartLine />}
        description="Monitor your activity to measure your improvements and set new goals for higher performance."
        isReversed={true}
      />

      {/* Step 5 */}
      <Step
        title="Step 5: Maintain Diet"
        icon={<FaAppleAlt />}
        description="Ensure you're maintaining a healthy diet. Follow the nutrition plans designed for your goals."
        isReversed={false}
      />
    </div>
  );
};

export default GymSteps;
