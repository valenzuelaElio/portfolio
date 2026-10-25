import { FaBuilding } from 'react-icons/fa';
import dual_effect from '../../assets/companies/dual_effect.svg'
import inacap from '../../assets/companies/inacap.webp'
import time_hunters from '../../assets/companies/time_hunters.svg'

const experienceData = [
  {
    id: 1,
    company: {
      "es": "INACAP · Sede Maipú",
      "en": "INACAP · Maipú Campus"
    },
    role:  {
      "es": "Docente",
      "en": "Teacher"
    },
    period: '2026',
    logo : inacap,
    icon: FaBuilding,
    description:
    {
      "es": "Docente del área de Diseño, responsable de planificar e impartir clases prácticas y teóricas, desarrollar actividades de aprendizaje y evaluar proyectos de estudiantes. Integro conocimientos de diseño digital, desarrollo interactivo y tecnologías creativas en experiencias formativas orientadas a la aplicación práctica de los contenidos y al desarrollo de competencias profesionales.",
      "en": "Design instructor responsible for planning and delivering practical and theoretical classes, developing learning activities, and assessing student projects. I integrate knowledge of digital design, interactive development, and creative technologies into learning experiences focused on practical application and the development of professional skills."
    },
    tags: [],
  },
  {
    id: 2,
    company: {
      "es": "Time Hunters",
      "en": "Time Hunters"
    },
    role:  {
      "es": "Programador generalista",
      "en": "Generalist Programmer"
    },
    period: '2025 — 2026',
    logo : time_hunters,
    icon: FaBuilding,
    description: {
      "es": "Desarrollo e implementación de sistemas de juego en Unreal Engine 5, participando en la programación de mecánicas, lógica de juego e interfaces de usuario. Responsable de implementar sistemas de combate, progresión de misiones e interacciones del jugador en Isekai Guild, además de desarrollar un minijuego arcade inspirado en Duck Hunt para Daybreak Slam. También contribuí al perfeccionamiento de otros minijuegos, integrando nuevas funcionalidades en las estructuras de juego existentes.",
      "en": "Developed and implemented gameplay systems in Unreal Engine 5, contributing to the programming of mechanics, game logic, and user interfaces. Responsible for implementing combat systems, quest progression, and player interactions in Isekai Guild, as well as developing a Duck Hunt-inspired arcade minigame for Daybreak Slam. Also contributed to improving other minigames by integrating new features into existing gameplay systems."
    },
    tags: ['Game Dev', 'C++', 'Blueprints', 'Unreal Engine', 'Gameplay', "UI"],
  },
  {
    id: 3,
    company: {
      "es": "Dual Effect",
      "en": "Dual Effect"
    },
    role:  {
      "es": "Programador técnico",
      "en": "Technical Programmer"
    },
    period: '2021 — 2025',
    logo : dual_effect,
    icon: FaBuilding,
    description:
    {
      "es": "Participé durante cuatro años en el desarrollo de Tormented Souls II como uno de los tres programadores principales del equipo técnico. Mis responsabilidades incluyeron el desarrollo y mantenimiento de sistemas de juego, la implementación integral de interfaces de usuario mediante UMG y la creación de sistemas de guardado y carga, inventario, equipamiento de armas e inspección de objetos 3D. También desarrollé interacciones para puzles y mecánicas del entorno, integré diseños de UI/UX y trabajé en opciones de accesibilidad, configuración, localización y optimización de interfaces. Colaboré en la depuración, optimización, corrección de errores y soporte posterior al lanzamiento.",
      "en": "Contributed to the development of Tormented Souls II for four years as one of three core programmers on the technical team. My responsibilities included developing and maintaining gameplay systems, implementing user interfaces using UMG, and creating save and load systems, inventory, weapon equipment, and 3D object inspection features. I also developed puzzle interactions and environmental mechanics, integrated UI/UX designs, and worked on accessibility options, settings, localization, and interface optimization. Additionally, I contributed to debugging, performance optimization, bug fixing, and post-launch support."
    },
    tags: ['Game Dev', 'C++', 'Blueprints', 'Unreal Engine', 'Gameplay', "UI"],
  },
  {
    id: 4,
    company: {
      "es": "Sorgard Team",
      "en": "Sorgard Team"
    },
    role:  {
      "es": "Programador técnico",
      "en": "Technical Programmer"
    },
    period: '2020 — 2022',
    icon: FaBuilding,
    description:
    {
      "es": "Desarrollé mecánicas de juego, sistemas de interacción y lógica de usuario para experiencias interactivas de formación industrial y videojuegos. En los simuladores, implementé flujos de trabajo y funcionalidades orientadas a recrear procesos industriales y enseñar procedimientos de seguridad laboral mediante experiencias prácticas en primera persona. Además, participé en el desarrollo de Resquack, un videojuego arcade para web creado durante una Game Jam, implementando controles, mecánicas y lógica central.",
      "en": "Developed gameplay mechanics, interaction systems, and user logic for industrial training experiences and video games. For the simulators, I implemented workflows and features designed to recreate industrial processes and teach workplace safety procedures through hands-on first-person experiences. I also contributed to the development of Resquack, a web-based arcade game created during a Game Jam, implementing controls, mechanics, and core gameplay logic."
    },
    tags: ['Unity', 'C#', 'Game Dev', 'Prototipado', 'Game Dev', 'C++', 'Blueprints', 'Unreal Engine', 'Gameplay', "UI"],
  },
  {
    id: 5,
    company: {
      "es": "Riolab",
      "en": "Riolab"
    },
    role:  {
      "es": "Programador técnico",
      "en": "Technical Programmer"
    },
    period: '2019 — 2021',
    icon: FaBuilding,
    description:
    {
      "es": "Participé en el desarrollo de aplicaciones móviles y soluciones digitales, contribuyendo a la implementación de funcionalidades y experiencias interactivas. Esta experiencia se desarrolló en un laboratorio de diseño y productos digitales que integra tecnología, diseño y comunicación para crear soluciones digitales.",
      "en": "Contributed to the development of mobile applications and digital solutions, implementing features and interactive experiences. Worked in a digital design and product laboratory that combines technology, design, and communication to create digital solutions."
    },
    tags: ['Unity', 'C#', 'REST/API', 'Prototipado'],
  },
];

export default experienceData;