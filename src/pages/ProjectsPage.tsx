const ProjectsPage = () => {
  return (
    <div className="w-100 h-100 ">
      <section className="project-wrapper mb-3">
        <a
          href="https://zvoosh.github.io/Chinese-Cultural-Evolution/"
          target="_blank"
          className="image-wrapper"
        >
          <img src="/images/china.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href="https://zvoosh.github.io/Chinese-Cultural-Evolution/"
              target="_blank"
              className="no-decoration white pointer white-hover"
            >
              Brief History of Chinese Cultural Development
            </a>
          </h2>
          <p className="mt-1 font-11">
            This project was developed as part of my graduate thesis and serves
            as an educational exploration of Chinese culture throughout history.
            The website offers a concise yet insightful overview of the
            evolution of Chinese civilization, spanning from the prehistoric
            Stone Age all the way to the era of modern art. It is thoughtfully
            divided into four main sections, each focusing on a distinct
            cultural period.
          </p>
        </div>
      </section>
      <section className="project-wrapper mb-3">
        <a
          href="https://dusanprogram.eu/"
          target="_blank"
          className="image-wrapper"
        >
          <img src="/images/personal.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href="https://dusanprogram.eu/"
              target="_blank"
              className="no-decoration white pointer white-hover"
            >
              Personal website
            </a>
          </h2>
          <p className="mt-1 font-11">
            This freelance project was developed for a professional photographer
            and video director, with the goal of creating a visually engaging
            fontSize: '1.1rem'a nd comprehensive online portfolio. The website
            showcases a wide range of client work, including both photography
            and videography.
          </p>
        </div>
      </section>
      <section className="project-wrapper mb-3">
        <a
          href="https://zvoosh.github.io/imageSlider/"
          target="_blank"
          className="image-wrapper"
        >
          <img src="/images/imageSlider.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href="https://zvoosh.github.io/imageSlider/"
              target="_blank"
              className="white no-decoration pointer white-hover"
            >
              Image Slider
            </a>
          </h2>
          <p className="mt-1 font-11">
            This project was designed to function as a versatile image slider,
            ideal for showcasing visual content across a wide range of
            devices.Built with clean, modular HTML, the component emphasizes
            reusability, making it easy to integrate into various web
            development projects.
          </p>
        </div>
      </section>
      <section className="project-wrapper mb-3">
        <a
          href="https://todolist.dusanprogram.eu/"
          className="image-wrapper"
          target="_blank"
        >
          <img src="/images/todo.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href="https://todolist.dusanprogram.eu/"
              target="_blank"
              className="white no-decoration pointer white-hover"
            >
              To-Do List
            </a>
          </h2>
          <p className="mt-1 font-11">
            This project is a task management app designed to help users stay
            organized and productive. The core functionality centers around
            creating, categorizing, and tracking tasks to ensure nothing gets
            overlooked.
          </p>
        </div>
      </section>
      <section className="project-wrapper mb-3">
        <a
          href="https://expensetrack.dusanprogram.eu/"
          className="image-wrapper"
          target="_blank"
        >
          <img src="/images/expenseTrack.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href="https://expensetrack.dusanprogram.eu/"
              target="_blank"
              className="white no-decoration pointer white-hover"
            >
              Expense Track
            </a>
          </h2>
          <p className="mt-1 font-11">
            This project serves as an expense tracker designed to help users
            track their cashflow through graphs pi charts and data tables.
          </p>
        </div>
      </section>
      <section className="project-wrapper mb-3">
        <a href="" className="image-wrapper" target="_blank">
          <img src="/images/vaco.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href=""
              target="_blank"
              className="white no-decoration pointer white-hover"
            >
              Vaco
            </a>
          </h2>
          <p className="mt-1 font-11">
            Freelance project made for a proffessional photographer and video
            director.
          </p>
        </div>
      </section>
      <section className="project-wrapper mb-3">
        <a
          href="https://mygallery.dusanprogram.eu"
          className="image-wrapper"
          target="_blank"
        >
          <img src="/images/mygallery.png" className="w-100 h-100 cover" />
        </a>
        <div className="text-wrapper">
          <h2 className="underline underline-5 font-12">
            <a
              href="https://mygallery.dusanprogram.eu"
              target="_blank"
              className="white no-decoration pointer white-hover"
            >
              My Gallery
            </a>
          </h2>
          <p className="mt-1 font-11">
            Personal project for a gallery to keep my images.
          </p>
        </div>
      </section>
    </div>
  );
};

export { ProjectsPage };
