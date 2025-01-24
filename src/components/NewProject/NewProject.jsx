import { Input } from '../Input';
import { PrimaryButton } from '../PrimaryButton';

export function NewProject() {
  return (
    <div className="mt-16 w-[35rem]">
      <menu className="my-4 flex items-center justify-end gap-4">
        <li>
          <button className="curson-pointer text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <PrimaryButton>Save</PrimaryButton>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" />
        <Input label="Description" type="text" textarea />
        <Input label="Due date" type="date" />
      </div>
    </div>
  );
}
