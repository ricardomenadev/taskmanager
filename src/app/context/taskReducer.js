"use client";

import { TYPES } from "../types/types";


export const initialState = {
  tasks: [],
  categories: ["Personal", "Trabajo", "Compras"],
  activeFilter: "all",
  isLoading: false, //Indica si hay una operacion en curso
  error: null, //almacena mensajes de error
  successMessage: null, //almacena mensajes de exito
  loadingOperation: null, //indica que operacion esta en curso
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload.text,
            category: action.payload.category,
            completed: false,
          },
        ],
        successMessage: "Tarea agregada correctamente",
      };

    case TYPES.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(
          task =>
            task.id === action.payload
              ? { ...task, completed: !task.completed } // Cambiamos el estado solo de la tarea que coincide con el ID
              : task // Dejamos las demás tareas sin cambios
        ),
      };

    case TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        // Agregamos un mensaje de éxito
        successMessage: "Tarea eliminada correctamente",
      };

    case TYPES.ADD_CATEGORY:
      // Evitamos duplicados
      if (state.categories.includes(action.payload)) {
        return {
          ...state,
          error: "Esta categoría ya existe", // Agregamos un mensaje de error
        };
      }
      return {
        ...state,
        categories: [...state.categories, action.payload],
        successMessage: "Categoría agregada correctamente", // Mensaje de éxito
      };

    case TYPES.SET_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      };

      case TYPES.FETCH_START:
      return {
        ...state,
        isLoading: true,           // Activamos el indicador de carga
        error: null,               // Limpiamos cualquier error anterior
        loadingOperation: action.payload  // Identificador de la operación en curso
      };

      case TYPES.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,          // Desactivamos el indicador de carga
        loadingOperation: null,    // Limpiamos el identificador de operación
        // Si se incluyen datos en el payload, podríamos actualizar el estado aquí
        ...(action.payload ? action.payload : {})
      };

      case TYPES.FETCH_ERROR:
      return {
        ...state,
        isLoading: false,          // Desactivamos el indicador de carga
        loadingOperation: null,    // Limpiamos el identificador de operación
        error: action.payload      // Guardamos el mensaje de error
      };

      case TYPES.SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.payload  // Establecemos el mensaje de éxito
      };

      case TYPES.CLEAR_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: null       // Limpiamos el mensaje de éxito
      };

      case TYPES.CLEAR_ERROR:
      return {
        ...state,
        error: null                // Limpiamos el mensaje de error
      };
    
    default:
      return state;  // Si no reconocemos la acción, devolvemos el estado sin cambios
  }
};

export default taskReducer;