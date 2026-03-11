import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BlogSpace
        </Link>

        <nav className="flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>

          <Link
            to="/create-blog"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Write Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
