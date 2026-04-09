import { useEffect, useState } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])

  useEffect( () => {
    fetch('https://api.github.com/users/AsierRM/repos')
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        const selectedRepos = ['Tamagotchi', 'abdPrueba2', 'PrimerProyecto']
      
      
      const filteredProjects = data.filter((repo) => selectedRepos.includes(repo.name))
     
    
      setProjects(filteredProjects)
     }
    })
    .catch((error) => console.error('Error al cargar proyectos:', error))
  }, [])
  
  return (
    <div className="projects-container">
      <h2>Mis proyectos</h2>
      <p className="projects-subtitle">
        Estos son algunos de mis repositorios y proyectos más destacados.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>

            <p className="project-description">
              {project.description || 'Sin descripción disponible'}
            </p>

            <div className="project-info">
              <span>{project.language || 'Sin lenguaje principal'}</span>
              <span>★ {project.stargazers_count}</span>
            </div>

            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              Ver repositorio
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects