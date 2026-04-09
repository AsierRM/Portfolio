function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Espacio de trabajo"
        />
      </div>

      <div className="about-text">
        <h2>Sobre mí</h2>

        <p>
          Soy Asier Rodriguez, graduado en Ingeniería Informática y especializado
          en desarrollo web. Me considero una persona curiosa, organizada y con
          muchas ganas de seguir creciendo profesionalmente.
        </p>

        <p>
          Tengo interés por el desarrollo frontend, el diseño de interfaces y
          la creación de experiencias de usuario intuitivas. También disfruto
          trabajando con bases de datos y APIs.
        </p>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Java, Node.js, Express, SQL</p>
          </div>

          <div className="skill-card">
            <h3>Herramientas</h3>
            <p>Git, GitHub, Figma, VS Code</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About