import { Content } from './components/Content/Content';
import { ProjectsContextProvider } from './store/projectsStateContext';

function App() {
  return (
    <ProjectsContextProvider>
      <Content />
    </ProjectsContextProvider>
  );
}

export default App;
