import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Section 1: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Contact Us</h3>
            <p className="mb-4">
              <FaPhoneAlt className="inline-block text-blue-500 mr-2" />
              +1 234 567 890
            </p>
            <p className="mb-4">
              <FaEnvelope className="inline-block text-blue-500 mr-2" />
              info@gymfluence.com
            </p>
          </div>

          {/* Section 2: Social Media Links */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-blue-500 hover:text-white text-3xl transition" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-500 hover:text-white text-3xl transition" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-blue-500 hover:text-white text-3xl transition" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-blue-500 hover:text-white text-3xl transition" />
              </a>
            </div>
          </div>

          {/* Section 3: General Info */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">About Gymfluence</h3>
            <p>
              Gymfluence is your trusted partner in fitness. We provide expert training programs, diet plans, and community support to help you reach your fitness goals. Whether you're a beginner or a pro, Gymfluence has the resources you need to succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Darker Bottom Section */}
      <div className="bg-gray-950 py-4 mt-12 text-center text-gray-400">
        <p>&copy; 2024 Gymfluence. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
