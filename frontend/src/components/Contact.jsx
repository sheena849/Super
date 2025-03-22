import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Construct the WhatsApp message link
    const whatsappMessage = `Hi, I'm ${name}. My email is ${email}. ${message}`;
    const whatsappLink = `https://wa.me/+254795790839?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect to WhatsApp chat
    window.open(whatsappLink, "_blank");

    // Optionally, clear the form and set a status message
    setFormData({ name: '', email: '', message: '' });
    setStatus('Redirecting to WhatsApp...');
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-6 bg-gray-900 text-white w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-16 w-full">
        {/* Left Side - Contact Info */}
        <motion.div
          className="lg:w-1/3 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-teal-400">Get in Touch</h2>
            <p className="text-lg text-gray-300 mt-2">Looking to collaborate or discuss a project? Let’s connect!</p>
          </div>

          <div className="space-y-4 text-lg text-left">
            <p className="flex items-center">
              <FaEnvelope className="text-teal-400 mr-3" />
              <a
                href="mailto:mugoivy@gmail.com"
                className="hover:underline text-gray-300"
              >
                sheenamugo04@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-teal-400 mr-3" />
              <a
                href="tel:+254701620732"
                className="hover:underline text-gray-300"
              >
                +254 795790839
              </a>
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-teal-400 mr-3" /> Nairobi, Kenya
            </p>
            <p className="flex items-center">
              <FaLinkedin className="text-teal-400 mr-3" />
              <a
                href="https://www.linkedin.com/in/sheena-mugo-03564026b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300"
              >
                Connect on LinkedIn
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="lg:w-1/2 w-full bg-gray-800 p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
          </div>

          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-5 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none transition"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="text-center">
              <motion.button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {/* Status Message */}
          {status && (
            <div className="mt-4 text-center text-white">
              <p>{status}</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
