import { Route, Routes, useLocation } from "react-router";
import "antd/dist/reset.css";
import "./App.css";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { useEffect } from "react";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="container">
      <div className="flex justify-center aling-center">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/projects" element={<ProjectsPage />}></Route>
              <Route path="/contact" element={<ContactPage />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
