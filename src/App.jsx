import { Content } from './components/Content/Content';
import { ProjectsContextProvider } from './store/projectsStateContext';

function App() {
  // const handleAddTask = newTaskText => {
  //   setProjectsState(prevState => {
  //     const taskId = str5_36();

  //     const newTask = {
  //       id: taskId,
  //       text: newTaskText,
  //       projectId: prevState.selectedProjectId,
  //     };

  //     return {
  //       ...prevState,
  //       tasks: [newTask, ...prevState.tasks],
  //     };
  //   });
  // };

  // const handleDeleteTask = taskId => {
  //   setProjectsState(prevState => {
  //     return {
  //       ...prevState,
  //       tasks: prevState.tasks.filter(task => task.id !== taskId),
  //     };
  //   });
  // };

  return (
    <ProjectsContextProvider>
      <Content />
    </ProjectsContextProvider>
  );
}

export default App;
