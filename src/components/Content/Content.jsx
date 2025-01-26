import { useContext } from 'react';
import { ProjectsContext } from '../../store/projectsStateContext';
import { ProjectsSidebar } from '../ProjectsSidebar';
import { NewProject } from '../NewProject';
import { NoProjectSelected } from '../NoProjectSelected';
import { SelectedProject } from '../SelectedProject';

export function Content() {
  const { selectedProjectId } = useContext(ProjectsContext);

  let content;

  if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId) {
    content = <SelectedProject />;
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <ProjectsSidebar />
      {content}
    </main>
  );
}
