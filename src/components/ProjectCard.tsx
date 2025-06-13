import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar, FiUser } from "react-icons/fi";

interface Project {
    id: number;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    svg: React.ReactNode;
    githubUrl?: string;
    demoUrl?: string;
    date: string;
    client?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all"
        >
            {/* Image SVG du projet */}
            <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-6">
                {project.svg}
            </div>

            {/* Contenu du projet */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                        <FiCalendar className="mr-1" />
                        {project.date}
                    </div>
                </div>

                {project.client && (
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                        <FiUser className="mr-2" />
                        {project.client}
                    </div>
                )}

                <p className="text-gray-600 mb-4">{project.description}</p>

                <ul className="space-y-2 mb-4">
                    {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">✓</span>
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Boutons d'action */}
                <div className="flex space-x-3">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                        >
                            <FiGithub className="mr-2" />
                            Code
                        </a>
                    )}
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                            <FiExternalLink className="mr-2" />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;