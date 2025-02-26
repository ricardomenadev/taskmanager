"use client";

import { useState } from "react";

export default function CategoryForm() {
  const [category, setCategory] = useState("");

  return (
    <form action="" className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="category-input" className="block text-sm font-medium text-gray-700">
            Nombre de la categoría
        </label>
        <input
          id="category-input"
          type="text"
          
          
          placeholder="Ej: Trabajo, Estudios, Casa..."
        //   className={`w-full p-3 border ${error ? 'border-red-300 focus:ring-red-300 focus:border-red-500' : 'border-gray-300 focus:ring-purple-300 focus:border-purple-500'} rounded-lg focus:ring-2 transition-colors shadow-sm`}
        />
      </div>
      <button 
        type="submit"
        className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        Agregar Categoría
      </button>
    </form>
  );
}
