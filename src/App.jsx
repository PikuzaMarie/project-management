import { useState } from 'react';
import { ProjectsSidebar } from './components/ProjectsSidebar';
import { NewProject } from './components/NewProject';
import { NoProjectSelected } from './components/NoProjectSelected';
import { SelectedProject } from './components/SelectedProject';
import { str5_36 } from 'hyperdyperid/lib/str5_36';

const INITIAL_PROJECTS_STATE = {
  // selectedProjectId variable holds one of three possible values
  // 1) undefined - neither certain project was selected nor add project button was clicked
  // 2) null - add project button was clicked
  // 3) id value - a project with ceratain id was selected
  // initially set to undefined
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
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

  const handleAddTask = newTaskText => {
    setProjectsState(prevState => {
      const taskId = str5_36();

      const newTask = {
        id: taskId,
        text: newTaskText,
        projectId: prevState.selectedProjectId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = taskId => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId),
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
  } else if (curSelectedProjectId >= 0) {
    content = (
      <SelectedProject
        project={projectsState.projects.find(
          project => project.id === curSelectedProjectId,
        )}
        onDeleteProject={handleDeleteProject}
        tasks={projectsState.tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar
        projectsData={projectsState.projects}
        onAddProject={handleStartAddProject}
        onOpenProject={handleOpenProject}
        selectedProjectId={curSelectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
