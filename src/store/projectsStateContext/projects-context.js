import { createContext } from 'react';

// selectedProjectId variable holds one of three possible values
// 1) undefined - neither certain project was selected nor add project button was clicked
// 2) null - add project button was clicked
// 3) id value - a project with ceratain id was selected
export const ProjectsContext = createContext({
  projects: [],
  selectedProjectId: undefined,
  startAddProject: () => {},
  addProject: () => {},
  closeProject: () => {},
  openProject: () => {},
  deleteProject: () => {},
});
