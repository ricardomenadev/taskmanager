"use client";

import { useState } from "react";

export default function TasksForm() {
  const [text, setText] = useState("");
  // const [category, setCategory] = useState(categories[0] || 'Personal');

  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="task-input" className="block text-sm mb-1 font-medium text-gray-700">
          Descripción de la tarea
        </label>
        <input
          id="task-input"
          type="text"
          value={text}
          placeholder="¿Que necesitas hacer hoy?"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 transition-colors shadow-sm"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-700">
          Categoría
        </label>
        <div className="relative">
          <select
            name=""
            id=""
            className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 bg-white transition-colors shadow-sm pr-10"
          ></select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <button className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        Agregar
      </button>
    </form>
  );
}
