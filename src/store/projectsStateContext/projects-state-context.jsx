import { useState } from 'react';
import { ProjectsContext } from './projects-context';
import { str5_36 } from 'hyperdyperid/lib/str5_36';

export function ProjectsContextProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    projects: [],
    selectedProjectId: undefined,
  });

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = project => {
    setProjectsState(prevState => {
      const projectId = str5_36();
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, { id: projectId, ...project }],
      };
    });
  };

  const handleCloseProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleOpenProject = projectId => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };

  const handleDeleteProject = projectId => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          project => project.id !== projectId,
        ),
      };
    });
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
