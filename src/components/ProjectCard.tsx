import React from 'react';
import { Github, ExternalLink, Star, Calendar, Users, Code, Globe, Database, Smartphone } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  demo: string;
  category: string;
  status: 'Production' | 'Beta' | 'Development';
  year?: string | number;
  teamSize?: number;
  duration?: string;
  features?: string[];
  results?: string[];
}

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'compact' | 'detailed';
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'default',
  priority = false 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-custom-lime text-custom-blue';
      case 'Beta':
        return 'bg-yellow-400 text-yellow-900';
      case 'Development':
        return 'bg-custom-teal text-white';
      default:
        return 'bg-custom-green text-custom-blue';
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryLower = category.toLowerCase();
    if (categoryLower.includes('web')) return <Globe className="w-4 h-4" />;
    if (categoryLower.includes('mobile') || categoryLower.includes('app')) return <Smartphone className="w-4 h-4" />;
    if (categoryLower.includes('desktop')) return <Code className="w-4 h-4" />;
    if (categoryLower.includes('database')) return <Database className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'Production': return 'En Producción';
      case 'Beta': return 'Versión Beta';
      case 'Development': return 'En Desarrollo';
      default: return status;
    }
  };

  if (variant === 'compact') {
    return (
      <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-custom-green/30 overflow-hidden">
        <div className="h-32 bg-gradient-to-br from-custom-teal to-custom-blue flex items-center justify-center relative">
          <div className="text-4xl text-white/20 font-bold">
            {project.title.charAt(0)}
          </div>
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-custom-blue mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-custom-blue/70 text-sm mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-teal hover:text-custom-blue transition-colors"
                aria-label={`Ver código fuente de ${project.title} en GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-teal hover:text-custom-blue transition-colors"
                aria-label={`Ver demo en vivo de ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <span className="text-xs text-custom-blue/50">
              {project.tech.length} tecnología{project.tech.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'detailed') {
    return (
      <article className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-custom-green/30 overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-custom-teal via-custom-blue to-custom-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Project Number */}
          <div className="absolute top-6 left-6 text-white/30 text-6xl font-bold">
            0{project.id}
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-6 right-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
          
          {/* Category */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white">
            {getCategoryIcon(project.category)}
            <span className="font-medium">{project.category}</span>
          </div>
          
          {/* Project Meta */}
          <div className="absolute bottom-6 right-6 text-white/80 text-sm text-right">
            {project.year && (
              <div className="flex items-center justify-end space-x-1 mb-1">
                <Calendar className="w-3 h-3" />
                <span>{project.year}</span>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center justify-end space-x-1">
                <Users className="w-3 h-3" />
                <span>{project.teamSize} persona{project.teamSize !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-custom-blue mb-4">{project.title}</h2>
          <p className="text-custom-blue/80 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-custom-blue mb-3">Características Principales:</h3>
              <div className="grid grid-cols-1 gap-2">
                {project.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-custom-lime rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-custom-blue/70 text-sm">{feature}</span>
                  </div>
                ))}
                {project.features.length > 4 && (
                  <div className="text-custom-teal text-sm font-medium">
                    +{project.features.length - 4} características más
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-custom-blue mb-3">Tecnologías:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-custom-green text-custom-blue rounded-lg text-sm font-medium border border-custom-green/50 hover:bg-custom-teal hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-custom-blue mb-3">Resultados:</h3>
              <div className="grid grid-cols-1 gap-2">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Star className="w-3 h-3 text-custom-lime" />
                    <span className="text-custom-blue/70 text-sm font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-custom-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-custom-blue transition-all duration-300 hover:scale-105"
              aria-label={`Ver código fuente de ${project.title} en GitHub`}
            >
              <Github className="w-5 h-5" />
              <span>Código</span>
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-custom-teal text-custom-teal px-6 py-3 rounded-xl font-semibold hover:bg-custom-teal hover:text-white transition-all duration-300"
              aria-label={`Ver demo en vivo de ${project.title}`}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-custom-green/30 overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-custom-teal via-custom-blue to-custom-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 bg-custom-lime text-custom-blue px-3 py-1 rounded-full text-sm font-bold">
            Destacado
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
          
          {/* Category */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-2 text-white">
            {getCategoryIcon(project.category)}
            <span className="font-medium">{project.category}</span>
          </div>
          
          {/* Project Meta */}
          <div className="absolute bottom-6 right-6 text-white/80 text-sm text-right">
            {project.year && (
              <div className="flex items-center justify-end space-x-1 mb-1">
                <Calendar className="w-3 h-3" />
                <span>{project.year}</span>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center justify-end space-x-1">
                <Users className="w-3 h-3" />
                <span>{project.teamSize} dev{project.teamSize !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-custom-blue mb-4 group-hover:text-custom-teal transition-colors">
            {project.title}
          </h2>
          <p className="text-custom-blue/80 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-custom-green text-custom-blue text-sm rounded-lg font-medium hover:bg-custom-teal hover:text-white transition-colors cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Links */}
          <div className="flex space-x-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium group"
              aria-label={`Ver código fuente de ${project.title} en GitHub`}
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Código
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium group"
              aria-label={`Ver demo en vivo de ${project.title}`}
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Demo
            </a>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-custom-green/30">
      {/* Project Header */}
      <div className="h-48 bg-gradient-to-br from-custom-teal to-custom-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
          <div className="absolute bottom-6 left-8 w-6 h-6 border border-white rotate-45"></div>
        </div>
        
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              {getCategoryIcon(project.category)}
              <span className="text-white text-sm font-medium">{project.category}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
              {getStatusText(project.status)}
            </span>
          </div>
          
          <div className="text-white">
            <div className="text-5xl font-bold opacity-30 text-right">
              {project.title.charAt(0)}
            </div>
          </div>
        </div>

        {/* Image overlay if provided */}
        {project.image && (
          <img 
            src={project.image}
            alt={`Captura de pantalla del proyecto ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            loading={priority ? "eager" : "lazy"}
          />
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-custom-blue mb-3 group-hover:text-custom-teal transition-colors">
          {project.title}
        </h2>
        <p className="text-custom-blue/80 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Project Meta */}
        {(project.year || project.duration) && (
          <div className="flex items-center space-x-4 mb-4 text-sm text-custom-blue/60">
            {project.year && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
            )}
            {project.duration && (
              <span>{project.duration}</span>
            )}
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-custom-green text-custom-blue text-sm rounded-lg font-medium hover:bg-custom-teal hover:text-white transition-colors cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Links */}
        <div className="flex space-x-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium group"
            aria-label={`Ver código fuente de ${project.title} en GitHub`}
          >
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Código
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium group"
            aria-label={`Ver demo en vivo de ${project.title}`}
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Demo
          </a>
        </div>
      </div>

      {/* Schema.org structured data for each project */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "creator": {
              "@type": "Organization",
              "name": "CodeNova"
            },
            "dateCreated": project.year,
            "genre": project.category,
            "url": project.demo,
            "codeRepository": project.github,
            "programmingLanguage": project.tech,
            "keywords": project.tech.join(", ")
          })
        }}
      />
    </article>
  );
};