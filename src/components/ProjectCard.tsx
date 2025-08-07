import React from 'react';
import { Github, ExternalLink, Star, Calendar, Users, Code } from 'lucide-react';

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
  year?: string;
  teamSize?: number;
  duration?: string;
}

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured' | 'compact';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  variant = 'default' 
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
    switch (category.toLowerCase()) {
      case 'web app':
        return <Code className="w-4 h-4" />;
      case 'mobile app':
        return <Users className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  if (variant === 'compact') {
    return (
      <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-custom-green/30 overflow-hidden">
        <div className="h-32 bg-gradient-to-br from-custom-teal to-custom-blue flex items-center justify-center relative">
          <div className="text-4xl text-white/20 font-bold">
            {project.title.charAt(0)}
          </div>
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-custom-blue mb-2">{project.title}</h3>
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
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-teal hover:text-custom-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <span className="text-xs text-custom-blue/50">
              {project.tech.length} tecnologías
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-custom-green/30 overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-custom-teal via-custom-blue to-custom-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Project Number */}
          <div className="absolute top-6 left-6 text-white/30 text-6xl font-bold">
            0{project.id}
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-6 right-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
              {project.status}
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
                <span>{project.teamSize} personas</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-custom-blue mb-4">{project.title}</h3>
          <p className="text-custom-blue/80 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-custom-blue mb-3">Tecnologías:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-custom-green text-custom-blue rounded-lg text-sm font-medium border border-custom-green/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-custom-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-custom-blue transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>Código</span>
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-custom-teal text-custom-teal px-6 py-3 rounded-xl font-semibold hover:bg-custom-teal hover:text-white transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-custom-green/30">
      {/* Project Header */}
      <div className="h-48 bg-gradient-to-br from-custom-teal to-custom-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
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
              {project.status}
            </span>
          </div>
          
          <div className="text-white">
            <div className="text-5xl font-bold opacity-30 text-right">
              {project.title.charAt(0)}
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-custom-blue mb-3 group-hover:text-custom-teal transition-colors">
          {project.title}
        </h3>
        <p className="text-custom-blue/80 mb-4 leading-relaxed">
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
          >
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Código
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal hover:text-custom-blue transition-colors font-medium group"
          >
            <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};