import { createContext } from 'react';

export const TasksContext = createContext({
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
});
