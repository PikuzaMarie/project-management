import { useReducer } from 'react';
import { tasksReducer } from './tasks-reducer';
import { TasksContext } from './tasks-context';
import { str5_36 } from 'hyperdyperid/lib/str5_36';

const state = {
  tasks: [],
};

export function TasksContextProvider({ children }) {
  const [tasksState, tasksDispatcher] = useReducer(tasksReducer, state);

  const handleAddTask = (newTaskText, selectedProjectId) => {
    const taskId = str5_36();
    const newTask = {
      id: taskId,
      text: newTaskText,
      projectId: selectedProjectId,
    };

    tasksDispatcher({
      type: 'ADD',
      payload: newTask,
    });
  };

  const handleDeleteTask = taskId => {
    tasksDispatcher({ type: 'DELETE', payload: taskId });
  };

  const ctxValue = {
    tasks: tasksState.tasks,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return (
    <TasksContext.Provider value={ctxValue}>{children}</TasksContext.Provider>
  );
}
