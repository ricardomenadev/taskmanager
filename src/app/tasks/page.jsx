"use client";

import TaskForm from '../components/taskForm';
import CategoryForm from '../components/categoryForm';
import FilterButtons from '../components/filterButtons';
import TaskList from '../components/taskList'
import Link from "next/link";

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/*Header con navegacion */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Tasks Manager</h1>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              Acerca de
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 inline-block mb-4">
            Gestor de Tareas
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Organiza tus actividades diarias utilizando categorías
            personalizadas y filtra tus tareas para encontrar exactamente lo que
            necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/*Panel izq */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-6 cursor-pointer">
              <span className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-bold text-gray-800">Nueva Tarea</h3>
            </div>
            <TaskForm />

            <div className="mt-10 pt-6 border-t border-gray-100">
              <div className="flex items-center mb-6 cursor-pointer">
                <span className="bg-purple-100 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-gray-800">
                  Nueva Categoría
                </h3>
              </div>
              <CategoryForm/>
            </div>
          </div>

          {/* Panel derecho */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-6 cursor-pointer">
            <span className="bg-indigo-100 p-2 rounded-lg mr-3 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-gray-800">Mis Tareas</h3>
            </div>
            <FilterButtons/>
          </div>
          <div className='mt-6'>
          <TaskList />
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200 mt-10 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Desarrollado con Next.js, Context API y useReducer</p>
          <p className="mt-2">© 2025 Ricardo A. Mena - Task Manager</p>
        </div>
      </footer>
    </div>
  );
}
