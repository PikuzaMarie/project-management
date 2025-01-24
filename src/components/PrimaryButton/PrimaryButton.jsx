export function PrimaryButton({ children, ...props }) {
  return (
    <button
      className="curson-pointer rounded-md bg-stone-800 px-8 py-2 text-stone-50 hover:bg-stone-950"
      {...props}
    >
      {children}
    </button>
  );
}
