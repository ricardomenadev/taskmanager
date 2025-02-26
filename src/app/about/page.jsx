'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente y brillos */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-100 z-0">
        {/* Elementos decorativos */}
        <div className="absolute top-40 right-10 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Grid decorativo */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 inline-block">
            Acerca de Task Manager
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
            <span className="bg-indigo-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Nuestro Proyecto
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Task Manager nació con la idea de crear una herramienta sencilla pero potente para
            gestionar tareas diarias. Utilizando tecnologías modernas como React, Next.js, Context API 
            y useReducer, hemos desarrollado una aplicación que te permite organizar tu trabajo de 
            forma eficiente y sin distracciones.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Esta aplicación fue creada como un proyecto de aprendizaje para entender los conceptos
            avanzados de gestión de estado en React, demostrando cómo se pueden implementar
            patrones de diseño efectivos en aplicaciones web modernas que resuelven problemas reales
            de organización y productividad.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
            <span className="bg-indigo-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </span>
            Tecnologías Utilizadas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                <span className="bg-blue-200 p-1.5 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L1 7v10l11 5 11-5V7L12 2zm0 2.311l7.633 3.367L12 11.056 4.367 7.678 12 4.311zm-9 10.578V8.622l8 3.556v7.689l-8-3.578zm10 3.578v-7.689l8-3.556v6.889l-8 3.356z"/>
                  </svg>
                </span>
                Next.js
              </h3>
              <p className="text-gray-700">
                Framework de React que nos permite crear aplicaciones web rápidas, 
                optimizadas y con renderizado del lado del servidor.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center">
                <span className="bg-indigo-200 p-1.5 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Context API
              </h3>
              <p className="text-gray-700">
                Sistema de gestión de estado global que evita el prop drilling y 
                simplifica la comunicación entre componentes en diferentes niveles.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
                <span className="bg-purple-200 p-1.5 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                useReducer
              </h3>
              <p className="text-gray-700">
                Hook de React que permite manejar estados complejos mediante acciones 
                y reducers, facilitando una gestión predecible del estado.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
                <span className="bg-teal-200 p-1.5 rounded-lg mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </span>
                Tailwind CSS
              </h3>
              <p className="text-gray-700">
                Framework de CSS utilitario que nos permite crear interfaces modernas
                y responsivas rápidamente sin salir del HTML.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center">
            <span className="bg-indigo-100 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            ¿Cómo Funciona?
          </h2>
          
          <ol className="mt-6 space-y-6">
            <li className="flex">
              <span className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">1</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Crear categorías</h3>
                <p className="text-gray-700">
                  Organiza tus tareas por áreas de tu vida o por proyectos específicos
                  para mantener todo en orden y facilitar la gestión.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">2</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Agregar tareas</h3>
                <p className="text-gray-700">
                  Añade nuevas tareas asignándolas a una categoría específica, 
                  detallando lo que necesitas hacer de forma clara y concisa.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">3</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Filtrar</h3>
                <p className="text-gray-700">
                  Utiliza los filtros para ver solo las tareas que te interesan
                  en este momento, como pendientes, completadas o por categoría.
                </p>
              </div>
            </li>
            
            <li className="flex">
              <span className="bg-teal-100 text-teal-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4">4</span>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Gestionar</h3>
                <p className="text-gray-700">
                  Marca las tareas como completadas o elimínalas cuando
                  ya no sean necesarias, manteniendo tu espacio de trabajo ordenado.
                </p>
              </div>
            </li>
          </ol>
        </div>
        
        <div className="text-center">
          <Link 
            href="/tasks"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Ir a la Aplicación
          </Link>
        </div>
      </div>

      {/* Estilos para la animación */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translatey(0px) scale(1);
          }
          50% {
            transform: translatey(-20px) scale(1.05);
          }
          100% {
            transform: translatey(0px) scale(1);
          }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}