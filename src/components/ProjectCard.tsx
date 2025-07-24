import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  category: string;
  status: 'Production' | 'Beta' | 'Development';
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-custom-blue">
      <div className="h-48 bg-gradient-to-br from-custom-lime to-custom-blue flex items-center justify-center">
        <div className="text-6xl text-custom-green opacity-20">
          {project.title.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-custom-lime text-custom-green rounded-full text-sm font-semibold">
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            project.status === 'Production' 
              ? 'bg-custom-lime text-custom-green'
              : project.status === 'Beta'
              ? 'bg-yellow-100 text-yellow-600'
              : 'bg-custom-blue text-white'
          }`}>
            {project.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-custom-teal mb-3">{project.title}</h3>
        <p className="text-custom-green mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-custom-blue text-white rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal hover:text-custom-green transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Código
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-custom-teal hover:text-custom-green transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};