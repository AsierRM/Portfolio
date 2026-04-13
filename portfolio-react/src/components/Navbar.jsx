import { FaSun, FaMoon } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

function Navbar({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <nav className="navbar">
      <div className="navbar-logo">Portfolio</div>

      <ul className="navbar-links">
        <li>
          <a href="#hero">{t('nav.home')}</a>
        </li>

        <li>
          <a href="#about">{t('nav.about')}</a>
        </li>

        <li>
          <a href="#projects">{t('nav.projects')}</a>
        </li>

        <li>
          <a href="#contact">{t('nav.contact')}</a>
        </li>

      </ul>

      {/* Botones idioma */}

      <div className="language-switcher">
        <button
          className={`lang-btn ${currentLang === 'es' ? 'active' : ''}`}
          onClick={() => {
            i18n.changeLanguage('es')
            localStorage.setItem('lang', 'es')
          }}>ES</button>

        <button
          className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
          onClick={() => {
            i18n.changeLanguage('en')
            localStorage.setItem('lang', 'en')
          }}>EN</button>
      </div>

      {/* Cambiar claro/oscuro */}
      <button className={`theme-toggle ${darkMode ? 'active' : ''}`}
        onClick={() => setDarkMode(!darkMode)}>
        <div className="toggle-circle">
          {darkMode ? <FaMoon /> : <FaSun />}
        </div>
      </button>


    </nav>
  )
}

export default Navbar