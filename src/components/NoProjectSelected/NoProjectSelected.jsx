import { useContext } from 'react';
import { ProjectsContext } from '../../store/projectsStateContext';
import { PrimaryButton } from '../PrimaryButton';
import noProjectImage from '/no-projects.png?url';

export function NoProjectSelected() {
  const { startAddProject } = useContext(ProjectsContext);

  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectImage}
        alt="An empty task list with a pen"
        className="mx-auto h-16 w-16 object-contain"
      />
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <PrimaryButton onClick={startAddProject}>
          Create new project
        </PrimaryButton>
      </p>
    </div>
  );
}
