'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Welcome() {
  const router = useRouter();

  const handleStartApp = () => {
    router.push('/tasks');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiente y brillos */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 z-0">
        {/* Círculos decorativos con blur para efecto de brillo */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl w-full z-10 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center relative">
        {/* Efecto de línea decorativa */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
          Bienvenido a Task Manager
        </h1>
        
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Una aplicación diseñada para ayudarte a organizar tareas diarias de
          forma simple, intuitiva y efectiva.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-7 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-3">
              Organiza
            </h3>
            <p className="text-gray-600">
              Crea categorías personalizadas y agrupa tus tareas según tus
              necesidades específicas.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-7 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="inline-block p-3 bg-indigo-100 rounded-lg mb-4 group-hover:bg-indigo-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-indigo-700 mb-3">
              Gestiona
            </h3>
            <p className="text-gray-600">
              Marca tus tareas como completadas o elimínalas cuando ya no las
              necesites en tu flujo de trabajo.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-7 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="inline-block p-3 bg-purple-100 rounded-lg mb-4 group-hover:bg-purple-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-purple-700 mb-3">
              Filtra
            </h3>
            <p className="text-gray-600">
              Visualiza solo lo que necesitas usando nuestros filtros
              inteligentes para mantener el foco.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
          <button
            onClick={handleStartApp}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform"
          >
            Comenzar a Usar
          </button>
          
          <Link
            href="/about"
            className="bg-white text-gray-800 border border-gray-200 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
          >
            Más Información
          </Link>
        </div>
        
        <div className="pt-6 border-t border-gray-100 text-center text-gray-500">
          <p>Desarrollado con Next.js, Context API y useReducer</p>
          <p className="mt-2">© 2025 Ricardo A. Mena - Task Manager</p>
        </div>
      </div>

      {/* Estilos para la animación */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}