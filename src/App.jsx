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

  let content;

  switch (projectsState.selectedProjectId) {
    case undefined: {
      content = <NoProjectSelected onAddProject={handleStartAddProject} />;
      break;
    }
    case null: {
      content = <NewProject />;
      break;
    }
    default: {
      content = <NoProjectSelected onAddProject={handleStartAddProject} />;
      break;
    }
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar onAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
