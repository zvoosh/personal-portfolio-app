const AboutPage = () => {
  return (
    // AboutPage represents my journey as a developer
    <div className="w-100 h-100 flex justify-center flex-col mb-1">
      <h2 className="mt-2 underline underline-5">About me</h2>
      <p className="mt-2">
        Throughout my studies, I explored a diverse set of subjects that shaped
        my understanding of both theoretical and practical aspects of computing.
        These included:
      </p>
      <div>
        <ul className="pl-1 pt-1 white list-disc list-position-inside">
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Cloud Computing & Deployment</li>
          <li>Data Science</li>
          <li>Machine Learning</li>
          <li>Mobile App Development</li>
          <li>Applied Mathematics</li>
          <li>Discrete Mathematics</li>
          <li>Probability & Cryptography</li>
          <li>Software Testing & Quality Assurance</li>
        </ul>
      </div>
      <p className="mt-2">
        Each course and project helped me build a strong foundation in
        problem-solving, algorithmic thinking, and scalable software design. My
        professional journey began with a part-time role at FactoryWW, where I
        worked with React to build two major projects from the ground up. This
        experience was pivotal—it allowed me to apply my academic knowledge in a
        real-world setting and sharpen my skills in frontend development. I also
        expanded my toolkit by working with technologies like Flask, Angular,
        and React, gaining hands-on experience in building dynamic and
        responsive web applications.
      </p>
      <p className="mt-1">
        Currently, I’m working as a Frontend Developer Intern at Unified Mentor,
        where I continue to grow as a developer, collaborate with experienced
        engineers, and contribute to meaningful projects. I’m passionate about
        creating intuitive user experiences, writing clean and maintainable
        code, and staying up-to-date with the latest trends in web development.
        Whether it's solving complex problems or learning a new framework, I
        thrive on challenges and am always eager to push my boundaries.
      </p>
      {/*Section that includes images of my experiance as a developer */}
      <section className="image-grid">
        <div className="relative w-100 h-100">
          <div className="image-grid-title">
            <p>University of Singidunum</p>
            <p className="font-w-normal">10+ Practical Projects</p>
          </div>
          <img
            src="/SingidunumUniverzitet.jpg"
            className="w-100 h-100 cover opacity-06"
          />
        </div>
        <div className="relative w-100 h-100">
          <div className="image-grid-title">
            <p>FactoryWW</p>
            <p className="font-w-normal">Software Engineer 1</p>
          </div>
          <img src="/office.jpg" className="w-100 h-100 cover opacity-06" />
        </div>
        <div className="relative w-100 h-100">
          <div className="image-grid-title">
            <p>Udemy</p>
            <p className="font-w-normal">5+ Web Courses</p>
          </div>
          <img src="/seo.jpg" className="w-100 h-100 cover opacity-06" />
        </div>
        <div className="relative w-100 h-100">
          <div className="image-grid-title">
            <p>Unified Mentor</p>
            <p className="font-w-normal">Frontend Developer Intern</p>
          </div>
          <img src="/unified.jpg" className="w-100 h-100 cover opacity-06" />
        </div>
      </section>
    </div>
  );
};

export { AboutPage };
