const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 border-t-2 border-teal-400">
      <p className="text-lg">
        &copy; {new Date().getFullYear()} Sheena Mugo | Software Engineer
      </p>
      <div className="mt-3 flex justify-center space-x-4">
        <a
          href="https://github.com/sheena849"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sheena-mugo-03564026b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
        <a href="mailto:sheenamugo04@gmail.com" className="hover:text-blue-400">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
