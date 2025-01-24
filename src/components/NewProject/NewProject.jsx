import { Input } from '../Input';

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
          <button className="curson-pointer rounded-md bg-stone-800 px-8 py-2 text-stone-50 hover:bg-stone-950">
            Save
          </button>
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
