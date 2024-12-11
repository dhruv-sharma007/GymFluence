import React from "react";
import { FaDumbbell, FaHeartbeat, FaGlobe, FaShieldAlt, FaClock, FaClipboardList, FaUsers, FaTrophy, FaAppleAlt, FaBolt, FaRunning, FaWeightHanging, FaCarrot, FaBicycle, FaChartLine, FaRegSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const featuresData = [
  { icon: <FaDumbbell size={40} color="#FFD700" />, title: "Strength Training", description: "Build strength with personalized weightlifting plans." },
  { icon: <FaHeartbeat size={40} color="#FFD700" />, title: "Heart Health", description: "Monitor your heart rate and improve cardiovascular health." },
  { icon: <FaGlobe size={40} color="#FFD700" />, title: "Global Community", description: "Join a supportive community of fitness enthusiasts worldwide." },
  { icon: <FaShieldAlt size={40} color="#FFD700" />, title: "Secure Data", description: "Your data is protected with industry-leading security measures." },
  { icon: <FaClock size={40} color="#FFD700" />, title: "24/7 Access", description: "Access your workout routines anytime, anywhere." },
  { icon: <FaClipboardList size={40} color="#FFD700" />, title: "Track Progress", description: "Keep track of your fitness progress with detailed reports." },
  { icon: <FaUsers size={40} color="#FFD700" />, title: "Personal Coaching", description: "Work with certified coaches to reach your fitness goals." },
  { icon: <FaTrophy size={40} color="#FFD700" />, title: "Achievements", description: "Earn trophies and badges as you hit your fitness milestones." },
  { icon: <FaAppleAlt size={40} color="#FFD700" />, title: "Nutrition Advice", description: "Get personalized meal plans and nutrition tips for optimal results." },
  { icon: <FaBolt size={40} color="#FFD700" />, title: "High Energy Workouts", description: "Stay energized with intense workout routines designed to push your limits." },
  { icon: <FaRunning size={40} color="#FFD700" />, title: "Running Programs", description: "Follow tailored running programs to improve endurance and speed." },
  { icon: <FaWeightHanging size={40} color="#FFD700" />, title: "Weight Loss Plans", description: "Get customized weight loss plans and track your transformation." },
  { icon: <FaCarrot size={40} color="#FFD700" />, title: "Healthy Eating", description: "Learn the basics of healthy eating for sustainable fitness." },
  { icon: <FaBicycle size={40} color="#FFD700" />, title: "Cycling Routines", description: "Explore cycling-based fitness programs for endurance and strength." },
  { icon: <FaChartLine size={40} color="#FFD700" />, title: "Performance Analysis", description: "Analyze your performance and adjust workouts to improve faster." },
  { icon: <FaRegSmile size={40} color="#FFD700" />, title: "Mental Wellness", description: "Maintain mental health with meditation, relaxation, and mindfulness techniques." }
];

const Features = () => {
  return (
    <section className="py-12 bg-gray-900 text-white text-center">
      <h2 className="text-4xl mb-8 text-yellow-500">Our Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 rounded-lg p-6 max-w-xs shadow-lg transform transition-transform hover:translate-y-2 hover:shadow-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl mb-3">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
