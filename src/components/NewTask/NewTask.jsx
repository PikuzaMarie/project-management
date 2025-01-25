import { useState } from 'react';

export function NewTask({ onAddTask }) {
  const [taskValue, setTaskValue] = useState('');

  const handleInputTask = value => {
    setTaskValue(value);
  };

  const handleClick = () => {
    onAddTask(taskValue);
    setTaskValue('');
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={taskValue}
        onChange={e => handleInputTask(e.target.value)}
        className="w-64 rounded-sm border-b-2 border-stone-200 bg-stone-200 px-2 py-1 focus:border-stone-600 focus:outline-none"
      />
      <button
        className="rounded-sm px-2 py-1 text-stone-600 hover:text-stone-800"
        onClick={handleClick}
      >
        Add a task
      </button>
    </div>
  );
}
