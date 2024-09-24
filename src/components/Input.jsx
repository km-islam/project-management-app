/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Input = forwardRef(({ textarea, label, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm front-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-full p-1 border-b-2 rounded-sm bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600 h-[90px]"
          ref={ref}
          {...props}
        />
      ) : (
        <input
          className="w-full p-1 border-b-2 rounded-sm bg-stone-200 border-stone-300 text-stone-600 focus:outline-none focus:border-stone-600 h-[42px]"
          ref={ref}
          {...props}
        />
      )}
    </div>
  );
});

export default Input;
