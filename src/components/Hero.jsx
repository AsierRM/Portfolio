import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className="hero-role">{t('hero.role')}</p>

        <h1>
          {t('hero.title')}
        </h1>

        <p className="hero-description">
          {t('hero.description')}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            {t('hero.projects')}
          </a>

          <a href="#contact" className="secondary-btn">
            {t('hero.contact')}
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img 
          src='/images/profile.jpg'
          alt="Asier Rodriguez"
        />
      </div>
    </div>
  )
}

export default Hero