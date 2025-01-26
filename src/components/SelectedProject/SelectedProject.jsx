import { useContext } from 'react';
import { ProjectsContext } from '../../store/projectsStateContext';
// import { Tasks } from '../Tasks';

export function SelectedProject() {
  const { projects, selectedProjectId, deleteProject } =
    useContext(ProjectsContext);
  const project = projects.find(project => project.id === selectedProjectId);

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="mt-16 w-[35rem]">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="mb-2 text-2xl font-bold text-stone-600">
            {project.title}
          </h2>
          <button
            className="text-stone-600 hover:text-stone-800"
            onClick={() => deleteProject(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-500">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-stone-400">
          {project.description}
        </p>
      </header>
      {/* <Tasks
        tasksData={tasks}
        selectedProjectId={project.id}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      /> */}
    </div>
  );
}
