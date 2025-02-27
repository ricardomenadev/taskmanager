"use client";

import { useState } from "react";
import { useTaskContext } from "../context/taskContext";

export default function TaskList() {
  const [expandedTask, setExpandedTask] = useState(null);
  const {tasks, activeFilter, toggleTask, deleteTask, isLoading, loadingOperation} = useTaskContext()

  //filtramos las tareas segun filtro activo
  const filteredTasks = tasks.filter(task => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'completed') return task.completed;
    if (activeFilter === 'active') return !task.completed;
    return task.category === activeFilter;
  })

  //funcion para mostrar detalles
  const toggleExpanded = (taskId) => {
    if (expandedTask === taskId) {
      setExpandedTask(null);
    } else {
      setExpandedTask(taskId);
    }
  };

  // Obtener color de categoría
  const getCategoryColor = (category) => {
    const colors = {
      'Personal': 'bg-blue-100 text-blue-800',
      'Trabajo': 'bg-indigo-100 text-indigo-800',
      'Compras': 'bg-emerald-100 text-emerald-800'
    };
    
    return colors[category] || 'bg-purple-100 text-purple-800';
  };

  if (filteredTasks.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        <h3 className="text-lg font-medium text-gray-700 mb-2">No hay tareas que mostrar</h3>
        <p className="text-gray-500">
          {activeFilter === 'all' 
            ? 'Comienza agregando una nueva tarea' 
            : 'Prueba seleccionando otro filtro'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-700">
          {filteredTasks.length} {filteredTasks.length === 1 ? 'tarea' : 'tareas'}
        </h3>
        <div className="text-sm text-gray-500">
          {activeFilter === 'all' 
            ? 'Mostrando todas' 
            : activeFilter === 'active' 
              ? 'Tareas pendientes'
              : activeFilter === 'completed' 
                ? 'Tareas completadas'
                : `Categoría: ${activeFilter}`}
        </div>
      </div>

      <div className="space-y-3">
        {filteredTasks.map(task => (
          <div
            key={task.id}
            className={`
              bg-white rounded-lg border ${expandedTask === task.id ? 'border-indigo-200 shadow-md' : 'border-gray-200 shadow-sm'} 
              hover:border-indigo-200 hover:shadow-md transition-all duration-200
            `}
          >
            <div 
              className="p-4 flex items-start justify-between cursor-pointer"
              onClick={() => toggleExpanded(task.id)}
            >
              <div className="flex items-start space-x-3">
                <div className="pt-0.5">
                  <div 
                    className={`
                      w-5 h-5 rounded-full border ${task.completed 
                        ? 'bg-indigo-500 border-indigo-500 text-white' 
                        : 'border-gray-300 hover:border-indigo-400'} 
                      flex items-center justify-center cursor-pointer transition-colors
                    `}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTask(task.id);
                    }}
                  >
                    {task.completed && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <div>
                  <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.text}
                  </p>
                  <div className="flex items-center mt-1">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(task.category)}`}>
                      {task.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <button 
                  className={`text-gray-400 hover:text-red-500 transition-colors p-1 ${
                    isLoading && loadingOperation === 'deleteTask' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isLoading || loadingOperation !== 'deleteTask') {
                      deleteTask(task.id);
                    }
                  }}
                  disabled={isLoading && loadingOperation === 'deleteTask'}
                >
                  {isLoading && loadingOperation === 'deleteTask' ? (
                    <svg className="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform ${expandedTask === task.id ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Panel expandible con detalles */}
            {expandedTask === task.id && (
              <div className="px-4 pb-4 pt-1 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  <p>Tarea creada el: {new Date(task.id).toLocaleDateString()}</p>
                  <p>Estado: {task.completed ? 'Completada' : 'Pendiente'}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
