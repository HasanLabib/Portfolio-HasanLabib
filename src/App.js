import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import { Toaster } from "react-hot-toast";


function App() {
  useEffect(() => {
    // Dark mode toggle logic
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Router>
      <SmoothScroll>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
        <div>
          <Toaster />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
