import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPostsPage from "./components/pages/BlogPostsPage";
import IndividualPostPage from "./components/pages/IndividualPostPage";
import ContactPage from "./components/pages/ContactPage";
import { ThemeProvider } from "./components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="container mx-auto">
          <Header />
          <Navbar />

          <main className="p-4">
            <Routes>
              <Route path="/" element={<BlogPostsPage />} />
              <Route path="/post/:id" element={<IndividualPostPage />} />
              <Route path="/contact" element={<ContactPage />} /> 
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}