import { NewTask } from '../NewTask';

export function Tasks({
  tasksData,
  onAddTask,
  onDeleteTask,
  selectedProjectId,
}) {
  const handleDeleteTask = taskId => {
    onDeleteTask(taskId);
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasksData.length > 0 ? (
        <ul className="mt-8 rounded-md bg-stone-100 p-3">
          {tasksData.map(task => {
            if (task.projectId === selectedProjectId) {
              return (
                <li
                  key={task.id}
                  className="mb-2 flex items-center justify-between rounded-sm bg-stone-200 px-2"
                >
                  <span className="m-0 p-0">{task.text}</span>
                  <button
                    className="rounded-sm px-4 py-2 text-stone-700 hover:bg-red-200 hover:text-red-800"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    X
                  </button>
                </li>
              );
            }
          })}
        </ul>
      ) : (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet
        </p>
      )}
    </section>
  );
}
