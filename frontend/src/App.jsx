import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Layout from "./components/Layout";
import { BlogProvider } from "./store/BlogContext";

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
      <Layout>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </div>
        </Layout>
      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
