import { CiLinkedin } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiGithub } from "react-icons/fi";
import { useNavigate } from "react-router";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-100">
      <div
        className={`burger-nav ${isOpen ? "open" : ""}`}
        style={{
          width: "100%",
          padding: "1rem",
          color: "white",
          textAlign: "center",
          fontSize: "1.1rem",
        }}
      >
        <div
          style={{ padding: ".5rem" }}
          className={`user-none pointer ${
            location.pathname == "/" ? "active-link" : ""
          }`}
          onClick={() => {
            navigate("");
            setIsOpen(false);
          }}
        >
          Home
        </div>
        <div
          style={{ padding: ".5rem" }}
          className={`user-none pointer ${
            location.pathname == "/about" ? "active-link" : ""
          }`}
          onClick={() => {
            navigate("/about");
            setIsOpen(false);
          }}
        >
          About
        </div>
        <div
          style={{ padding: ".5rem" }}
          className={`user-none pointer ${
            location.pathname == "/projects" ? "active-link" : ""
          }`}
          onClick={() => {
            navigate("/projects");
            setIsOpen(false);
          }}
        >
          Projects
        </div>
        <div
          style={{ padding: ".5rem" }}
          className={`user-none pointer ${
            location.pathname == "/contact" ? "active-link" : ""
          }`}
          onClick={() => {
            navigate("/contact");
            setIsOpen(false);
          }}
        >
          Contact
        </div>

        <a
          href="/images/dusan-ilic-cv.pdf"
          download={true}
          className="no-decoration white white-hover"
        >
          <div
            style={{ padding: ".5rem" }}
            className={`m-1 user-none pointer no-decoration white-hover`}
          >
            Download PDF Resume
          </div>
        </a>
      </div>
      <div className="header">
        <div className="burger-display">
          <GiHamburgerMenu
            onClick={() => {
              setIsOpen((prev) => !prev);
              console.log("isOpen", isOpen);
            }}
          />
        </div>
        <div className="font-16 bold letter-01 user-none mb-05">Dušan Ilić</div>
        <div className="flex font-11 mb-05 display-none">
          <div
            className={`m-1 user-none pointer ${
              location.pathname == "/" ? "active-link" : ""
            }`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </div>
          <div
            className={`m-1 user-none pointer ${
              location.pathname == "/about" ? "active-link" : ""
            }`}
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            className={`m-1 user-none pointer ${
              location.pathname == "/projects" ? "active-link" : ""
            }`}
            onClick={() => {
              navigate("/projects");
            }}
          >
            Project
          </div>
          <div
            className={`m-1 user-none pointer ${
              location.pathname == "/contact" ? "active-link" : ""
            }`}
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </div>
          <a
            href="/personal-portfolio-app/Dusan Ilic CV.pdf"
            download={true}
            className="no-decoration white white-hover"
          >
            <div className={`m-1 user-none pointer no-decoration white-hover`}>
              Download PDF Resume
            </div>
          </a>
        </div>
        <div>
          <CiLinkedin style={{ transform: "scale(1.5)", padding: ".5rem" }} />
          <FiGithub style={{ transform: "scale(1.5)", padding: ".5rem" }} />
        </div>
      </div>
    </div>
  );
};

export { Header };
