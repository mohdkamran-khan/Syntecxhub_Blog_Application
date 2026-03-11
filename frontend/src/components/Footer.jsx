const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h3 className="text-lg font-semibold mb-1">BlogSpace</h3>

        <p className="text-sm text-gray-400">
          Mohd Kamran Khan
        </p>

        <p className="text-xs text-gray-500 mt-1">
          © {new Date().getFullYear()} BlogSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
