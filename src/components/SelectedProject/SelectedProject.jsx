export function SelectedProject({ project, onDeleteProject }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
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
            onClick={() => onDeleteProject(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 whitespace-pre-wrap text-stone-400">
          {project.description}
        </p>
        <p className="text-stone-600">{formattedDate}</p>
      </header>
      TASKS
    </div>
  );
}
