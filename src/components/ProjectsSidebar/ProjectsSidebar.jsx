export function ProjectsSidebar() {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your projects
      </h2>
      <button className="cursor-pointer rounded-md bg-stone-700 px-4 py-2 text-xs text-stone-400 hover:bg-stone-600 hover:text-stone-100 md:text-base">
        + Add a project
      </button>
      <ul>
        <li>Learing React</li>
        <li>Mastering React</li>
      </ul>
    </aside>
  );
}
