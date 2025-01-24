import { useRef } from 'react';
import { Input } from '../Input';
import { PrimaryButton } from '../PrimaryButton';

export function NewProject({ onAddProject, onCancelAddProject }) {
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const handleCreateProject = () => {
    const project = {
      title: titleRef.current.value,
      descripton: descRef.current.value,
      date: dateRef.current.value,
    };

    onAddProject(project);
    handleResetFields();
  };

  const handleCancelCreation = () => {
    handleResetFields();
    onCancelAddProject();
  };

  const handleResetFields = () => {
    titleRef.current.value = '';
    descRef.current.value = '';
    dateRef.current.value = '';
  };

  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button
            className="curson-pointer text-stone-800 hover:text-stone-950"
            onClick={handleCancelCreation}
          >
            Cancel
          </button>
        </li>
        <li>
          <PrimaryButton onClick={handleCreateProject}>Save</PrimaryButton>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="Title" type="text" required />
        <Input ref={descRef} label="Description" type="text" textarea />
        <Input ref={dateRef} label="Due date" type="date" />
      </div>
    </div>
  );
}
