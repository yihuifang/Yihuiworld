import { ProjectData } from './projectTypes';
import { project1 } from './projects/project1';
import { project2 } from './projects/project2';
import { project3 } from './projects/project3';

// Re-export types for convenience
export type { ProjectSection, ProjectData, ProjectTheme, ProjectFeatures } from './projectTypes';

// Export all projects as an array
export const projectsData: ProjectData[] = [
  project1,
  project2,
  // project3 - Hidden (work in progress)
];

// Helper function: Get project data by ID
export const getProjectById = (id: number): ProjectData | undefined => {
  return projectsData.find(project => project.id === id);
};