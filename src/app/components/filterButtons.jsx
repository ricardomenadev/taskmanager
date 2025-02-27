"use client";

import { useTaskContext } from "../context/taskContext";

export default function FilterButtons() {
  const { categories, activeFilter, setFilter } = useTaskContext();

  // Botones de filtro predeterminados
  const defaultFilters = [
    {
      id: "all",
      label: "Todas",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      ),
    },
    {
      id: "active",
      label: "Pendientes",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "completed",
      label: "Completadas",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium text-gray-700">Filtra tus tareas:</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {/*Filtros predeterminados */}
        {defaultFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setFilter(filter.id)}
            className={`flex items-center text-gray-800 px-4 py-2 rounded-full text-sm font-medium 
                transition-all duration-200 ${activeFilter === filter.id ?
                  'bg-indigo-200 text-indigo-800 shadow-sm' :
                  'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>

      {categories.length > 0 && (
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Por categoría:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${activeFilter === category 
                    ? 'bg-purple-100 text-purple-800 shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
