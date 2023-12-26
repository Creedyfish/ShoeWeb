import React from "react";
interface ToggleSwitchProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
}
function ToggleSwitch(prop: ToggleSwitchProps) {
  return (
    <div className="inline-flex items-center">
      <div className="relative inline-block w-8 h-4 -mt-5 rounded-full cursor-pointer">
        <input
          type="checkbox"
          id="toggleswitch"
          checked={prop.isChecked}
          onChange={(e) => {
            prop.setIsChecked(e.target.checked);
          }}
          className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-red-500 checked:bg-green-500 peer-checked:border-green-500 peer-checked:before:bg-green-500"
        />
        <label
          htmlFor="toggleswitch"
          className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
        >
          <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"></div>
        </label>
      </div>
      <label
        htmlFor="toggleswitch"
        className="mt-px mb-0 ml-3 font-light text-gray-700 cursor-pointer select-none"
      >
        <div>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-slate-50">
            Add to Featured Items
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-slate-100">
            This will confirm if You want this product to be featured on the
            main page.
          </p>
        </div>
      </label>
    </div>
  );
}

export default ToggleSwitch;
