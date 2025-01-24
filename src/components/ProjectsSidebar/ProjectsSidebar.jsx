import { PrimaryButton } from '../PrimaryButton';

export function ProjectsSidebar({ onAddProject }) {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your projects
      </h2>
      <PrimaryButton onClick={onAddProject}>+ Add a project</PrimaryButton>
      <ul>
        <li>Learing React</li>
        <li>Mastering React</li>
      </ul>
    </aside>
  );
}
