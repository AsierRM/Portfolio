import { useEffect, useState } from 'react'
import ProjectModal from './ProjectModal'
import { useTranslation } from 'react-i18next'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/AsierRM/repos')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const selectedRepos = ['Tamagotchi-master', 'Proyecto-Administracion-Base-De-Datos', 'Portfolio']
          const filteredProjects = data.filter((repo) => selectedRepos.includes(repo.name))
          setProjects(filteredProjects)
        }
      })
      .catch((error) => console.error('Error al cargar proyectos:', error))
  }, [])

  //filtros
  const [selectedTech, setSelectedTech] = useState('All')
  const technologies = ['All', ...new Set(projects.map(p => p.language).filter(Boolean))]
  const filteredProjects = selectedTech === 'All' ? projects : projects.filter(p => p.language === selectedTech)

  const [selectedProject, setSelectedProject] = useState(null)

  //Traductor
  const { t } = useTranslation()
  return (
    <div className="projects-container">
      <h2>{t('projects.title')}</h2>
      <p className="projects-subtitle">
        {t('projects.subtitle')}
      </p>

      <div className="filter-buttons">
        {technologies.map((tech) => (
          <button
            key={tech}
            className={selectedTech === tech ? 'active' : ''}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-grid">

        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.name}</h3>

            <p className="project-description">
              {project.description || `{t('projects.noDescription')}`}
            </p>

            <div className="project-info">
              <span>{project.language || `{t('projects.noLanguage')}`}</span>
              <span>★ {project.stargazers_count}</span>
            </div>

            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              {t('projects.viewRepo')}
            </a>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default Projects