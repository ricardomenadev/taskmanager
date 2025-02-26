"use client";

export default function FilterButtons() {
  //   const { categories, activeFilter, setFilter } = useTaskContext();

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
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium 
                transition-all duration-200`}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
