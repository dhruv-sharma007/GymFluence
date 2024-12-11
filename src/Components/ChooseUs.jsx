import React from 'react';
import { FaDumbbell, FaAppleAlt, FaUsers, FaHeartbeat } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <h2 className="text-4xl font-semibold text-center mb-4">Why Choose Us?</h2>
      <h3 className="text-2xl font-bold text-center mb-10">Push Your Limits Forward</h3>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-64 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-orange-500 text-5xl mb-6 flex justify-center items-center">
            <FaDumbbell />
          </div>
          <h4 className="text-xl font-semibold mb-4">Modern Equipment</h4>
          <p className="text-gray-400 text-base">
            Train with the latest, state-of-the-art equipment designed to help you achieve your fitness goals efficiently.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-64 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-orange-500 text-5xl mb-6 flex justify-center items-center">
            <FaAppleAlt />
          </div>
          <h4 className="text-xl font-semibold mb-4">Healthy Nutrition Plan</h4>
          <p className="text-gray-400 text-base">
            Enjoy a balanced diet plan tailored to fuel your body and optimize your workouts for maximum results.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-64 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-orange-500 text-5xl mb-6 flex justify-center items-center">
            <FaUsers />
          </div>
          <h4 className="text-xl font-semibold mb-4">Professional Training Plan</h4>
          <p className="text-gray-400 text-base">
            Get personalized training sessions that fit your fitness level and help you break through your limits.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-64 text-center hover:scale-105 transition-transform duration-300">
          <div className="text-orange-500 text-5xl mb-6 flex justify-center items-center">
            <FaHeartbeat />
          </div>
          <h4 className="text-xl font-semibold mb-4">Unique to Your Needs</h4>
          <p className="text-gray-400 text-base">
            We design custom fitness and wellness solutions based on your individual goals, ensuring long-term success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
