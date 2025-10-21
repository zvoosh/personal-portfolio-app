import { useNavigate } from "react-router";
import { Carousel, Image } from "antd";
import { useState } from "react";

const HomePage = () => {
  const imageUrls = [
    "/images/vaco.png",
    "/images/china.png",
    "/images/expenseTrack.png",
    "/images/personal.png",
    "/images/todo.png",
    "/images/mygallery.png",
    "/images/scheduler.png",
  ];
  const navigate = useNavigate();

  return (
    // HomePage component showcases image of me and my biography
    // with the introduction of other sections of this website
    <div
      className="w-100 h-100 mb-3 font-11 "
      style={{
        overflow: "auto",
      }}
    >
      <section className="biography">
        <div className="bio-img">
          <img src="/images/DusanIlicCv.jpeg" alt="profile" />
        </div>
        <div className="bio-info">
          <div className="w-100 flex flex-col justify-center align-center">
            <h1 className="font-16 bold mb-05">Biografy</h1>
            <div className="ml-1 mb-05">
              I'm an Informatics graduate with a passion for web development and
              modern technologies. During my third year of university, I joined
              Factory Worldwide as a Software Developer 1, where I spent 11
              months sharpening my skills in a professional development
              environment. Since then, I've continued growing through hands-on
              projects and coursework in frameworks such as Angular, Flask, and
              React. I have experience across a variety of programming languages
              and tools and take a particular interest in the intersection of
              web engineering, Data Science, and AI. I'm hardworking, positive,
              and purpose-driven — always focused on delivering high-quality
              results on time.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mb-2 mt-2">
          <h2 className="font-16 bold mb-05">About me</h2>
          <div className="ml-1 mb-05">
            My passion for software development began in high school, where I
            first discovered the excitement of building things with code. That
            early curiosity quickly evolved into a deep interest in technology,
            leading me to pursue a degree in Informatics at university. During
            my academic journey, I immersed myself in a wide range of
            programming disciplines—from crafting simple HTML pages to
            developing full-stack applications using modern frameworks.
          </div>
          <button
            className="btn"
            onClick={() => {
              navigate("/about", { viewTransition: true });
            }}
          >
            Read more
          </button>
        </div>
      </section>
      <section>
        <h2 className="font-16 bold mb-05">Projects</h2>
        <div className="ml-1 mb-05">
          Over the course of my four years at university, I developed more than
          20 practical projects using a wide range of technologies. These
          projects allowed me to experiment with different programming languages
          and frameworks, including React, Angular, Java, Python, and more. Each
          project was an opportunity to apply theoretical knowledge to
          real-world scenarios—whether it was building interactive web
          applications, designing backend systems, or exploring data-driven
          solutions.
        </div>
        <button
          className="btn"
          onClick={() => {
            navigate("/projects", { viewTransition: true });
          }}
        >
          Read more
        </button>
      </section>
      <Image.PreviewGroup>
        <Carousel autoplay className="mt-2" arrows>
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="flex justify-center align-center text-center"
            >
              <Image
                key={index}
                src={url}
                preview={{ getContainer: "#root" }}
                className="contain"
              />
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>
    </div>
  );
};

export { HomePage };
