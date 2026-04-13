import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <div className='contact-container'>
      <div className='contact-text'>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.text')}</p>
      </div>

      <div className='contact-links'>
        <a href="mailto:arodriguez447@ikasle.ehu.eus" target='_blank'>
          <FaEnvelope />
          <span>arodriguez447@ikasle.ehu.eus</span>
        </a>

        <a href='https://github.com/AsierRM' target='_blank'>
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </div>

  )
}

export default Contact