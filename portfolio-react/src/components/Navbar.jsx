function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>

      <ul className="navbar-links">
        <li>
          <a href="#hero">Inicio</a>
        </li>

        <li>
          <a href="#about">Sobre mí</a>
        </li>

        <li>
          <a href="#projects">Proyectos</a>
        </li>

        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar