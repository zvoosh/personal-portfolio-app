const ProjectsPage = () => {
  return (
    <div className="w-100 h-100">
      <div className="project-wrapper" style={{ marginBottom: "3rem" }}>
        <a
          href="https://zvoosh.github.io/Chinese-Cultural-Evolution/"
          target="_blank"
          className="image-wrapper"
        >
          <img
            src="/china.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="text-wrapper">
          <h2
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              fontSize: "1.1rem",
            }}
          >
            Brief History of Chinese Cultural Development
          </h2>
          <div style={{ marginTop: "1rem " }}>
            This project was developed as part of my graduate thesis and serves
            as an educational exploration of Chinese culture throughout history.
            The website offers a concise yet insightful overview of the
            evolution of Chinese civilization, spanning from the prehistoric
            Stone Age all the way to the era of modern art. It is thoughtfully
            divided into four main sections, each focusing on a distinct
            cultural period.
          </div>
        </div>
      </div>
      <div className="project-wrapper" style={{ marginBottom: "3rem" }}>
        <a
          href="https://dusanprogram.eu/"
          target="_blank"
          className="image-wrapper"
        >
          <img
            src="/personal.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="text-wrapper">
          <h2
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              fontSize: "1.1rem",
            }}
          >
            Personal website
          </h2>
          <div style={{ marginTop: "1rem " }}>
            This freelance project was developed for a professional photographer
            and video director, with the goal of creating a visually engaging
            fontSize: '1.1rem'a nd comprehensive online portfolio. The website
            showcases a wide range of client work, including both photography
            and videography.
          </div>
        </div>
      </div>
      <div className="project-wrapper" style={{ marginBottom: "3rem" }}>
        <a
          href="https://zvoosh.github.io/imageSlider/"
          target="_blank"
          className="image-wrapper"
        >
          <img
            src="/imageSlider.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="text-wrapper">
          <h2
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              fontSize: "1.1rem",
            }}
          >
            Image Slider
          </h2>
          <div style={{ marginTop: "1rem " }}>
            This project was designed to function as a versatile image slider,
            ideal for showcasing visual content across a wide range of
            devices.Built with clean, modular HTML, the component emphasizes
            reusability, making it easy to integrate into various web
            development projects.
          </div>
        </div>
      </div>
      <div className="project-wrapper" style={{ marginBottom: "3rem" }}>
        <a
          href="https://zvoosh.github.io/ToDoListApp/"
          className="image-wrapper"
          target="_blank"
        >
          <img
            src="/todolist.png"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </a>
        <div className="text-wrapper">
          <h2
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              fontSize: "1.1rem",
            }}
          >
            To-Do List
          </h2>
          <div style={{ marginTop: "1rem " }}>
            This project is a task management app designed to help users stay
            organized and productive. The core functionality centers around
            creating, categorizing, and tracking tasks to ensure nothing gets
            overlooked.
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectsPage };
