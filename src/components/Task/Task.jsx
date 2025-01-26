import { useContext } from 'react';
import { TasksContext } from '../../store/tasksStateContext';

export function Task({ id, text }) {
  const { deleteTask } = useContext(TasksContext);

  const handleDeleteTask = taskId => {
    deleteTask(taskId);
  };

  return (
    <li className="mb-2 flex items-center justify-between rounded-sm bg-stone-200 px-2">
      <span className="m-0 p-0">{text}</span>
      <button
        className="rounded-sm px-4 py-2 text-stone-700 hover:bg-red-200 hover:text-red-800"
        onClick={() => handleDeleteTask(id)}
      >
        X
      </button>
    </li>
  );
}
