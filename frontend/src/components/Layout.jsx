import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
