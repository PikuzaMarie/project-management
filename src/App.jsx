import { ProjectsSidebar } from './components/ProjectsSidebar';
import { NewProject } from './components/NewProject';

function App() {
  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
