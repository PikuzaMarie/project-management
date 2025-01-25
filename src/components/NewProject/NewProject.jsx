import { useRef } from 'react';
import { Input } from '../Input';
import { PrimaryButton } from '../PrimaryButton';
import { Modal } from '../Modal';

export function NewProject({ onAddProject, onCancelAddProject }) {
  const modal = useRef();

  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const handleCreateProject = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descRef.current.value;
    const enteredDate = dateRef.current.value;

    if (
      titleRef.current.value.trim() === '' ||
      dateRef.current.value.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    const project = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
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
    <>
      <Modal ref={modal} buttonCaption="Ok, got it">
        <h2 className="mb-4 font-bold text-stone-900 uppercase md:text-xl">
          Invalid input
        </h2>
        <p className="mb-6 text-stone-400">
          Oops.. looks like you forgot to enter a title or due date :))
        </p>
      </Modal>
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
          <Input ref={titleRef} label="Title *" type="text" required />
          <Input ref={descRef} label="Description" type="text" textarea />
          <Input ref={dateRef} label="Due date *" type="date" required />
        </div>
      </div>
    </>
  );
}
