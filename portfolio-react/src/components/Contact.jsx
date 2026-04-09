import {FaEnvelope, FaGithub} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-text'>
        <h2>Contacto</h2>
        <p>Si quieres ponerte en contacto conmigo puedes mandarme un correo o encontrarme en github</p>
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