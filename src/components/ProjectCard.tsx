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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
        <div className="text-6xl text-green-600 opacity-20">
          {project.title.charAt(0)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            project.status === 'Production' 
              ? 'bg-green-100 text-green-600'
              : project.status === 'Beta'
              ? 'bg-yellow-100 text-yellow-600'
              : 'bg-blue-100 text-blue-600'
          }`}>
            {project.status}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Código
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};