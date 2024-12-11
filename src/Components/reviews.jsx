import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icon from react-icons

const ReviewCard = ({ review, name, stars }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-yellow-400 ${index < stars ? "text-yellow-400" : "text-gray-400"}`}
          />
        ))}
      </div>
      <p className="text-gray-300">{review}</p>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-gray-900 py-16">
      <h2 className="text-4xl font-semibold text-center text-blue-500 mb-12">
        What Our Users Say About GymFluence
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center px-4">
        {/* Review 1 */}
        <ReviewCard
          name="John Doe"
          review="GymFluence has completely transformed my workout routine! It's easy to use and helps me stay on track."
          stars={5}
        />

        {/* Review 2 */}
        <ReviewCard
          name="Jane Smith"
          review="Great platform! The workout tracking is amazing, and I love the detailed progress charts."
          stars={4}
        />

        {/* Review 3 */}
        <ReviewCard
          name="Alex Brown"
          review="I was able to improve my fitness goals with GymFluence. The app is user-friendly and motivating."
          stars={5}
        />
      </div>
    </div>
  );
};

export default Reviews;
