import { useReducer } from 'react';
import { projectsReducer } from './projects-reducer';
import { ProjectsContext } from './projects-context';
import { str5_36 } from 'hyperdyperid/lib/str5_36';

const state = {
  projects: [],
  selectedProjectId: undefined,
};

export function ProjectsContextProvider({ children }) {
  const [projectsState, projectsDispatcher] = useReducer(
    projectsReducer,
    state,
  );

  const handleStartAddProject = () => {
    projectsDispatcher({ type: 'START_ADD' });
  };

  const handleAddProject = project => {
    const projectId = str5_36();
    projectsDispatcher({
      type: 'ADD',
      payload: {
        project,
        projectId,
      },
    });
  };

  const handleCloseProject = () => {
    projectsDispatcher({ type: 'CLOSE' });
  };

  const handleOpenProject = projectId => {
    projectsDispatcher({ type: 'OPEN', payload: { projectId } });
  };

  const handleDeleteProject = projectId => {
    projectsDispatcher({ type: 'DELETE', payload: { projectId } });
  };

  const ctxValue = {
    projects: projectsState.projects,
    selectedProjectId: projectsState.selectedProjectId,
    startAddProject: handleStartAddProject,
    addProject: handleAddProject,
    closeProject: handleCloseProject,
    openProject: handleOpenProject,
    deleteProject: handleDeleteProject,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
