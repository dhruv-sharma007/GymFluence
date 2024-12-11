import React from 'react';
import { motion } from 'framer-motion'; // For animations

const WorkoutPlan = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-diet-image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl text-yellow-500 font-semibold mb-4">Workout Plans</h1>
          <p className="text-xl text-white">A perfect workout roadmap for your fitness journey.</p>
        </div>
      </section>

      {/* Beginner Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Beginner Workout Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Push-ups', 'Bodyweight Squats', 'Lunges', 'Plank', 'Glute Bridges', 'Wall Sit',
            'Step-ups', 'Superman Exercise', 'Mountain Climbers', 'Leg Raises', 'Jumping Jacks',
            'Arm Circles', 'Bicycle Crunches', 'Triceps Dips (using a chair)', 'Squat Pulses'
          ].map((exercise, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">{exercise}</h3>
              <p className="text-sm text-gray-400">Perform 3 sets of 10-12 reps, rest for 30 seconds between sets.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intermediate Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Intermediate Workout Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Bench Press', 'Deadlifts', 'Squats with Dumbbells', 'Pull-ups', 'Kettlebell Swings', 'Overhead Press',
            'Lateral Raises', 'Bulgarian Split Squats', 'Plank with Arm Lift', 'Dumbbell Rows', 'Box Jumps',
            'Cable Face Pulls', 'Russian Twists', 'Side Lunges', 'Jump Squats'
          ].map((exercise, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">{exercise}</h3>
              <p className="text-sm text-gray-400">Perform 3-4 sets of 8-10 reps, rest for 45 seconds between sets.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advanced Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Advanced Workout Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Barbell Squats', 'Clean and Press', 'Incline Dumbbell Bench Press', 'Pull-ups with Weights', 'Romanian Deadlifts',
            'Barbell Rows', 'Cable Lateral Raises', 'Chin-ups', 'Hack Squats', 'Triceps Dips (Weighted)', 'Farmer’s Walk',
            'Push-up Variations (Clapping Push-ups)', 'Leg Press', 'T-bar Row', 'Barbell Curl'
          ].map((exercise, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4">{exercise}</h3>
              <p className="text-sm text-gray-400">Perform 4-5 sets of 6-8 reps, rest for 60 seconds between sets.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkoutPlan;
