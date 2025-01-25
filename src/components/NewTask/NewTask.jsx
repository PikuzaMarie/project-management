import { useState, useRef } from 'react';
import { Modal } from '../Modal';

export function NewTask({ onAddTask }) {
  const [taskValue, setTaskValue] = useState('');
  const modal = useRef();

  const handleInputTask = value => {
    setTaskValue(value);
  };

  const handleClick = () => {
    if (!taskValue.trim()) {
      modal.current.open();
      return;
    }
    onAddTask(taskValue);
    setTaskValue('');
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Ok, great">
        <h2 className="mb-4 font-bold text-stone-900 uppercase md:text-xl">
          Invalid input
        </h2>
        <p className="mb-6 text-stone-400">
          Oops.. you`re trying to add an empty task
        </p>
      </Modal>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={taskValue}
          onChange={e => handleInputTask(e.target.value)}
          className="w-64 rounded-sm border-b-2 border-stone-200 bg-stone-200 px-2 py-1 focus:border-stone-600 focus:outline-none"
          required
        />
        <button
          className="rounded-sm px-2 py-1 text-stone-600 hover:text-stone-800"
          onClick={handleClick}
        >
          Add a task
        </button>
      </div>
    </>
  );
}
