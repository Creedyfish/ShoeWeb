/**
 * Imports the `React` library.
 */
import React from "react";

/**
 * Defines the `loading` function.
 * This function returns a JSX element that displays a loading spinner and a "Processing..." message.
 *
 * @returns {JSX.Element} The loading component.
 */
function loading() {
  return (
    <div className="container mx-auto flex justify-center ">
      <div className="pt-28 flex">
        <div className="bg-indigo-500 ...">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="animate-spin h-5 w-5 mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Processing...
        </div>
      </div>
    </div>
  );
}

/**
 * Exports the `loading` function as a default export.
 */
export default loading;
