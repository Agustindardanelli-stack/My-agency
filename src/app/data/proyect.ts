// data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  category: string;
  status: 'Production' | 'Beta' | 'Development';
  features: string[];
  year: number;
  teamSize: number;
  duration: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "UARC System",
    description: "Sistema integral de gestión universitaria con panel de administración, gestión de estudiantes y reportes en tiempo real.",
    longDescription: "Sistema completo de gestión universitaria desarrollado para optimizar los procesos administrativos y académicos. Incluye módulos de inscripciones, seguimiento académico, gestión de docentes, generación de reportes automáticos y dashboard ejecutivo con métricas en tiempo real.",
    image: "/images/projects/uarc-system.jpg",
    tech: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "JWT", "Socket.io", "Chart.js"],
    github: "https://github.com/Agustindardanelli-stack/uarc-system",
    demo: "https://uarc-system-demo.vercel.app",
    category: "Web Application",
    status: "Production",
    features: [
      "Dashboard administrativo completo",
      "Gestión de estudiantes y docentes",
      "Sistema de inscripciones online",
      "Reportes automáticos en PDF",
      "Notificaciones en tiempo real",
      "Gestión de horarios y aulas",
      "Sistema de calificaciones",
      "Panel de métricas y analytics"
    ],
    year: 2024,
    teamSize: 1,
    duration: "4 meses"
  },
  {
    id: 2,
    title: "Journal App",
    description: "Aplicación de journaling personal con autenticación, categorización de entradas y búsqueda avanzada.",
    longDescription: "Aplicación web progresiva para llevar un diario personal digital. Permite a los usuarios escribir, organizar y buscar sus pensamientos y experiencias diarias. Incluye funciones de categorización automática, análisis de sentimientos, recordatorios y sincronización en la nube.",
    image: "/images/projects/journal-app.jpg",
    tech: ["React", "Firebase", "Material-UI", "Redux", "TypeScript", "PWA", "Cloud Functions"],
    github: "https://github.com/Agustindardanelli-stack/journal-app",
    demo: "https://journal-app-personal.vercel.app",
    category: "PWA",
    status: "Beta",
    features: [
      "Editor de texto enriquecido",
      "Categorización automática de entradas",
      "Búsqueda avanzada con filtros",
      "Análisis de estados de ánimo",
      "Recordatorios personalizables",
      "Sincronización multiplataforma",
      "Modo offline completo",
      "Exportación de datos en múltiples formatos"
    ],
    year: 2023,
    teamSize: 1,
    duration: "3 meses"
  },
  {
    id: 3,
    title: "Heroes Database",
    description: "Base de datos interactiva de superhéroes con búsqueda, filtros y comparación de estadísticas.",
    longDescription: "Aplicación web que consume APIs públicas de superhéroes para crear una base de datos interactiva. Los usuarios pueden explorar personajes, comparar estadísticas, crear equipos personalizados y acceder a información detallada sobre sus héroes favoritos.",
    image: "/images/projects/heroes-db.jpg",
    tech: ["Vue.js", "TypeScript", "Tailwind CSS", "Pinia", "Vite", "API REST", "Chart.js"],
    github: "https://github.com/Agustindardanelli-stack/heroes-db",
    demo: "https://heroes-database-interactive.vercel.app",
    category: "Web Application",
    status: "Production",
    features: [
      "Búsqueda inteligente de personajes",
      "Filtros avanzados por universo y poderes",
      "Comparación visual de estadísticas",
      "Creador de equipos personalizado",
      "Perfiles detallados de personajes",
      "Gráficos interactivos de poder",
      "Sistema de favoritos",
      "Modo batalla simulado"
    ],
    year: 2023,
    teamSize: 1,
    duration: "2 meses"
  }
];

// Funciones auxiliares para filtrar y buscar proyectos
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByTech = (tech: string): Project[] => {
  return projects.filter(project => 
    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};

export const searchProjects = (query: string): Project[] => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(lowercaseQuery) ||
    project.description.toLowerCase().includes(lowercaseQuery) ||
    project.tech.some(t => t.toLowerCase().includes(lowercaseQuery))
  );
};

// Estadísticas de proyectos - VERSIÓN CORREGIDA
export const getProjectStats = () => {
  const totalProjects: number = projects.length;
  const productionProjects: number = projects.filter((p: Project) => p.status === 'Production').length;
  const betaProjects: number = projects.filter((p: Project) => p.status === 'Beta').length;
  const developmentProjects: number = projects.filter((p: Project) => p.status === 'Development').length;
  
  const allTech: string[] = projects.flatMap((p: Project) => p.tech);
  const uniqueTech: string[] = Array.from(new Set(allTech));
  
  const techCount = uniqueTech.map((tech: string) => ({
    name: tech,
    count: allTech.filter((t: string) => t === tech).length
  })).sort((a, b) => b.count - a.count);

  return {
    totalProjects,
    productionProjects,
    betaProjects,
    developmentProjects,
    uniqueTechnologies: uniqueTech.length,
    topTechnologies: techCount.slice(0, 5)
  };
};

// Colores para las tecnologías (opcional para UI)
export const techColors: Record<string, string> = {
  'React': '#61DAFB',
  'TypeScript': '#3178C6',
  'Node.js': '#339933',
  'MongoDB': '#47A248',
  'Firebase': '#FFCA28',
  'Vue.js': '#4FC08D',
  'Tailwind CSS': '#06B6D4',
  'Express': '#000000',
  'Material-UI': '#0081CB',
  'Redux': '#764ABC',
  'Socket.io': '#010101',
  'Chart.js': '#FF6384',
  'JWT': '#000000',
  'PWA': '#5A0FC8',
  'Pinia': '#FDD835',
  'Vite': '#646CFF'
};

export default projects;