import { forwardRef } from 'react';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const styleClasses =
    'w-full rounded-sm border-b-2 border-stone-300 bg-stone-200 p-1 text-stone-600 focus:border-stone-600 focus:outline-none';

  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-sm font-bold text-stone-500 uppercase">
        {label}
        {textarea ? (
          <textarea ref={ref} className={styleClasses} {...props} rows={4} />
        ) : (
          <input ref={ref} className={styleClasses} {...props} />
        )}
      </label>
    </p>
  );
});

export { Input };
