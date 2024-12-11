import React from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Blog Title Section with Gym Image */}
      <div className="mb-12 text-center">
        <motion.img
          src="https://static.vecteezy.com/system/resources/thumbnails/020/724/865/small/athletic-man-training-biceps-at-the-gym-to-use-as-banner-photo.jpg" // Replace with the correct image URL
          alt="GymFluence Banner"
          className="w-full h-72 object-cover rounded-lg mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your New Fitness Journey: Discover the Power of Our Gym
        </h1>
        <p className="text-lg text-gray-400">
          At GymFluence, we believe that fitness is not just about lifting
          weights or running on a treadmill—it's about building a lifestyle,
          achieving personal goals, and becoming the best version of yourself.
        </p>
      </div>

      {/* Blog Content Section */}
      <div className="space-y-12">
        {/* Why Choose GymFluence Section */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Why Choose GymFluence?
          </h2>
          <h3 className="text-2xl font-semibold mb-4">
            1. State-of-the-Art Equipment
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            A great workout starts with the right tools. That’s why we invest in
            the latest fitness equipment to ensure that you have everything you
            need to target your goals effectively. Our gym features:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-300">
            <li>
              Cardio Equipment: Treadmills, stationary bikes, ellipticals, and
              rowing machines with heart rate tracking and interactive programs.
            </li>
            <li>
              Strength Training: Free weights, resistance machines, and
              functional training areas.
            </li>
            <li>
              Specialized Equipment: Battle ropes, kettlebells, medicine balls,
              yoga mats, and resistance bands.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 mt-6">
            2. Expert Trainers and Personalized Coaching
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            At GymFluence, we pride ourselves on having a team of highly trained
            and certified fitness experts ready to help you reach your full
            potential. Our trainers specialize in:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-300">
            <li>
              Personal Training: One-on-one coaching tailored to your goals.
            </li>
            <li>
              Group Classes: Yoga, Pilates, Zumba, Spinning, HIIT, and more.
            </li>
            <li>
              Nutritional Guidance: Meal planning, supplementation, and eating
              habits.
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 mt-6">
            3. A Community Like No Other
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            At GymFluence, we are more than just a gym—we are a community. Our
            members are at the heart of everything we do. From fitness
            challenges to social events, we make it easy for members to connect
            and share their fitness journeys.
          </p>
          <h3 className="text-2xl font-semibold mb-4 mt-6">
            4. Cleanliness and Hygiene
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            We prioritize your health and safety with strict hygiene protocols,
            ensuring a clean and sanitized gym environment.
          </p>
          <h3 className="text-2xl font-semibold mb-4 mt-6">
            5. Flexible Membership Options
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            We offer flexible membership plans to fit your lifestyle, including
            discounts for students, seniors, and military personnel.
          </p>
        </motion.div>

        {/* Our Facilities Section */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Facilities</h2>
          <ul className="list-disc pl-6 text-lg text-gray-300">
            <li>
              Locker Rooms: Clean, spacious locker rooms with private showers
              and secure lockers.
            </li>
            <li>
              Juice Bar: Refuel with nutritious smoothies and protein shakes.
            </li>
            <li>
              Relaxation Area: A lounge area perfect for post-workout recovery
              or catching up on your favorite podcast.
            </li>
            <li>Parking: Ample parking space for your convenience.</li>
          </ul>
        </motion.div>

        {/* GymFluence Experience Section */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-4">
            The GymFluence Experience: More Than Just a Workout
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Our gym isn’t just a place to exercise—it’s a place to transform.
            Whether you're aiming to lose weight, build muscle, or improve your
            overall health, GymFluence is here to support you every step of the
            way. We are more than just a gym—we are your partners in achieving
            your fitness goals.
          </p>
          <motion.a
            href="#"
            className="text-yellow-500 underline hover:text-yellow-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Join GymFluence Today
          </motion.a>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-4">
          What People Are Saying
        </h2>
        <div className="space-y-4">
          {[
            {
              name: "John Doe",
              review:
                "This blog has really helped me in achieving my fitness goals! The articles are so informative and easy to understand.",
            },
            {
              name: "Jane Smith",
              review:
                "Great tips on strength training and nutrition. I’ve already started following some of the advice and seeing results!",
            },
            {
              name: "Sam Lee",
              review:
                "I love the variety of topics covered here. It keeps me motivated to stay on track with my fitness journey!",
            },
          ].map((comment, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2">{comment.name}</h3>
              <p className="text-gray-400">{comment.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
