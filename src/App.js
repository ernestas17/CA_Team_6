import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="services" element={<ServicesPage />}></Route>
        <Route path="blog" element={<BlogPage />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
      </Routes>{" "}
    </div>
  );
}

export default App;
