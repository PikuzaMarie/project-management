import { useState } from 'react';
import { ProjectsSidebar } from './components/ProjectsSidebar';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';

const INITIAL_PROJECTS_STATE = {
  // selectedProjectId variable holds one of three possible values
  // 1) undefined - neither certain project was selected nor add project button was clicked
  // 2) null - add project button was clicked
  // 3) id value - a project with ceratain id was selected
  // initially set to undefined
  selectedProjectId: undefined,
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(INITIAL_PROJECTS_STATE);

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
      const currentProjects = prevState.projects;
      const currentProjectsCount = currentProjects.length;
      const currentSelectedProjectId = prevState.selectedProjectId;

      let newSelectedProjectId;

      if (currentProjectsCount > 0) {
        newSelectedProjectId = currentSelectedProjectId
          ? currentSelectedProjectId + 1
          : currentProjects[currentProjectsCount - 1].id + 1;
      } else {
        newSelectedProjectId = 0;
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          { id: newSelectedProjectId, ...project },
        ],
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

  let content;
  const curSelectedProjectId = projectsState.selectedProjectId;

  if (curSelectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  } else if (curSelectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancelAddProject={handleCloseProject}
      />
    );
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar
        projectsData={projectsState.projects}
        onAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
