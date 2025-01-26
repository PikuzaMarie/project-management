import { useContext } from 'react';
import { PrimaryButton } from '../PrimaryButton';
import { ProjectsContext } from '../../store/projectsStateContext';

export function ProjectsSidebar() {
  const { projects, selectedProjectId, startAddProject, openProject } =
    useContext(ProjectsContext);
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your projects
      </h2>
      <PrimaryButton onClick={startAddProject}>+ Add a project</PrimaryButton>
      <ul className="mt-8">
        {projects.map(project => {
          let cssClasses =
            'my-1 w-full rounded-sm px-2 py-1 text-left hover:bg-stone-800 hover:text-stone-200';

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200';
          } else {
            cssClasses += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => openProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
