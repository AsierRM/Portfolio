import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <div className="about-container">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Espacio de trabajo"
        />
      </div>

      <div className="about-text">
        <h2>{t('about.title')}</h2>

        <p>{t('about.description')}</p>

        <p>
          {t('about.interests')}
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
            <h3>{t('about.tools')}</h3>
            <p>Git, GitHub, Figma, VS Code</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About