import { useContext } from 'react';
import { TasksContext } from '../../store/tasksStateContext';
import { ProjectsContext } from '../../store/projectsStateContext';
import { NewTask } from '../NewTask';
import { Task } from '../Task';

export function Tasks() {
  const { selectedProjectId } = useContext(ProjectsContext);
  const { tasks } = useContext(TasksContext);

  const tasksForCurProject = tasks.filter(
    task => task.projectId === selectedProjectId,
  );

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-stone-700">Tasks</h2>
      <NewTask />
      {tasksForCurProject.length > 0 ? (
        <ul className="mt-8 rounded-md bg-stone-100 p-3">
          {tasksForCurProject.map(task => {
            return <Task key={task.id} {...task} />;
          })}
        </ul>
      ) : (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet
        </p>
      )}
    </section>
  );
}
