import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    es: {
        translation: {
            nav: {
                home: "Inicio",
                about: "Sobre mí",
                projects: "Proyectos",
                contact: "Contacto"
            },
            hero: {
                role: "Ingeniero Informático · Desarrollador Full Stack",
                title: "Hola, soy Asier Rodriguez",
                description:
                    "Me apasiona crear aplicaciones web modernas, intuitivas y eficientes. Disfruto trabajando tanto en frontend como en backend.",
                projects: "Ver proyectos",
                contact: "Contactar"
            },
            projects: {
                title: "Mis proyectos",
                subtitle: "Estos son algunos de mis repositorios y proyectos más destacados",
                noDescription: "Sin descripción disponible",
                noLanguage: "Sin lenguaje principal",
                viewRepo: "Ver repositorio",
                stars: "Estrellas"
            },
            contact: {
                title: "Contacto",
                text: "Si quieres ponerte en contacto conmigo puedes escribirme o encontrarme en mis redes."
            },

            modal: {
                noDescription: "Sin descripción disponible",
                language: "Lenguaje",
                stars: "Estrellas",
                viewRepo: "Ver repositorio",
                close: "Cerrar"
            },
            about: {
                title: "Sobre mí",
                description:
                    "Soy un ingeniero informático apasionado por el desarrollo web. Me gusta aprender nuevas tecnologías y mejorar constantemente mis habilidades.",
                interests: "Tengo interés por el desarrollo frontend, el diseño de interfaces y la creación de experiencias de usuario intuitivas. También disfruto trabajando con bases de datos y APIs.",
                tools: "Herramientas"
            },
            footer: {
                text: "© 2026 Asier Rodriguez. Todos los derechos reservados.",
                madeWith: "Hecho con React"
            }
        }
    },
    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About",
                projects: "Projects",
                contact: "Contact"
            },
            hero: {
                role: "Computer Engineer · Full Stack Developer",
                title: "Hi, I'm Asier Rodriguez",
                description:
                    "I love building modern, intuitive and efficient web applications. I enjoy working on both frontend and backend.",
                projects: "View projects",
                contact: "Contact"
            },
            projects: {
                title: "My projects",
                subtitle: "These are some of my featured repositories and projects",
                noDescription: "No description available",
                noLanguage: "No main language",
                viewRepo: "View repository",
                stars: "Stars"
            },
            contact: {
                title: "Contact",
                text: "If you want to get in touch, you can email me or find me on my professional networks."
            },
            modal: {
                noDescription: "No description available",
                language: "Language",
                stars: "Stars",
                viewRepo: "View repository",
                close: "Close"
            },
            about: {
                title: "About me",
                description:
                    "I am a computer engineer passionate about web development. I enjoy learning new technologies and continuously improving my skills.",
                interests: "I am interested in front-end development, interface design and creating intuitive user experiences. I also enjoy working with databases and APIs.",
                tools: "Tools"
            },
            footer: {
                text: "© 2026 Asier Rodriguez. All rights reserved.",
                madeWith: "Built with React"
            }
        }
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') || 'es',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })



export default i18n