import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ProjectDetailPage } from '../components/ProjectDetailPage';
import { getProjectById } from '../data/projects';

export function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || '0', 10);
  const project = getProjectById(projectId);
  
  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <ProjectDetailPage project={project} />;
}
