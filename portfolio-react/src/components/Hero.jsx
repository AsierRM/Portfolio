function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className="hero-role">Ingeniero Informático · Desarrollador Full Stack</p>

        <h1>
          Hola, soy <span>Asier Rodriguez</span>
        </h1>

        <p className="hero-description">
          Me apasiona crear aplicaciones web modernas, intuitivas y eficientes.
          Disfruto trabajando tanto en frontend como en backend y siempre estoy
          buscando aprender nuevas tecnologías.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            Ver proyectos
          </a>

          <a href="#contact" className="secondary-btn">
            Contactar
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://i.pinimg.com/736x/0b/6c/44/0b6c44a2bb3e369362c57911c66fbcc9.jpg"
          alt="Asier Rodriguez"
        />
      </div>
    </div>
  )
}

export default Hero