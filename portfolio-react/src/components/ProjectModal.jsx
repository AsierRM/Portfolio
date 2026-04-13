import { useTranslation } from 'react-i18next'

function ProjectModal({ project, onClose }) {
    if (!project) return null

    const projectImages = {
        'Portfolio': '/images/port.png',
        'Tamagotchi-master': '/images/tamagotchi.png',
        'Proyecto-Administracion-Base-De-Datos': '/images/SQL.jpg'
    }

    const { t } = useTranslation()
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✖ {t('modal.close')}</button>
                <br></br>

                {/* Imagen */}
                <div className="modal-image">
                    <img
                        src={projectImages[project.name] || '/images/no-image.jpg'}
                        alt={project.name}
                    />
                </div>

                <h2>{project.name}</h2>

                <p className="modal-description">
                    {project.description || t('modal.noDescription')}
                </p>

                {/* Tecnologías */}
                <div className="modal-tech">
                    <span className="tech-badge">
                        <strong>{t('modal.language')}:</strong> {project.language || 'N/A'}
                    </span>
                </div>

                <div className="modal-info">
                    <span>
                        <strong>{t('modal.stars')}:</strong> {project.stargazers_count}
                    </span>
                </div>

                <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-button"
                >
                    {t('modal.viewRepo')}
                </a>
            </div>
        </div>
    )
}

export default ProjectModal