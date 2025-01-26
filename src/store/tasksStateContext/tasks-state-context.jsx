import { useState } from 'react';
import { TasksContext } from './tasks-context';
import { str5_36 } from 'hyperdyperid/lib/str5_36';

export function TasksContextProvider({ children }) {
  const [tasksState, setTasksState] = useState([]);

  const handleAddTask = (newTaskText, selectedProjectId) => {
    setTasksState(prevState => {
      const taskId = str5_36();

      return [
        {
          id: taskId,
          text: newTaskText,
          projectId: selectedProjectId,
        },
        ...prevState,
      ];
    });
  };

  const handleDeleteTask = taskId => {
    setTasksState(prevState => {
      return prevState.filter(task => task.id !== taskId);
    });
  };

  const ctxValue = {
    tasks: tasksState,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
  };

  return (
    <TasksContext.Provider value={ctxValue}>{children}</TasksContext.Provider>
  );
}
