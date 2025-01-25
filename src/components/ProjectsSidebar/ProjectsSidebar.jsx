import { PrimaryButton } from '../PrimaryButton';

export function ProjectsSidebar({
  projectsData,
  onAddProject,
  onOpenProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your projects
      </h2>
      <PrimaryButton onClick={onAddProject}>+ Add a project</PrimaryButton>
      <ul className="mt-8">
        {projectsData.map(project => {
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
                onClick={() => onOpenProject(project.id)}
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
