"use client";

import { useCallback } from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import taskReducer, {initialState} from './taskReducer';
import {TYPES} from '../types/types'

const TaskContext = createContext();

// Creamos el proveedor del contexto que usará el reducer
export function TaskProvider({ children }) {
    // useReducer nos da el estado actual y la función dispatch
    // "state" contiene todos los datos de nuestra aplicación
    // "dispatch" es la función que usamos para enviar acciones al reducer
    const [state, dispatch] = useReducer(taskReducer, initialState);
    
    // === Limpieza automática de mensajes ===
    // Este efecto limpia los mensajes de éxito después de 3 segundos
    useEffect(() => {
      // Si hay un mensaje de éxito, lo limpiamos después de un tiempo
      if (state.successMessage) {
        const timer = setTimeout(() => {
          dispatch({ type: TYPES.CLEAR_SUCCESS_MESSAGE });
        }, 3000);
        
        // Limpiamos el temporizador si el componente se desmonta o si el mensaje cambia
        return () => clearTimeout(timer);
      }
    }, [state.successMessage]);

      // También podríamos hacer lo mismo con los mensajes de error
  useEffect(() => {
    if (state.error) {
      const timer = setTimeout(() => {
        dispatch({ type: TYPES.CLEAR_ERROR });
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [state.error]);

  // === Funciones para manipular tareas ===
  // Estos son "action creators" - funciones que crean y envían acciones
  
  // Añade una nueva tarea
  const addTask = useCallback((text, category) => {
    // Primero indicamos que estamos iniciando una operación
    dispatch({
      type: TYPES.FETCH_START,
      payload: 'addTask'  // Identificador de la operación
    });
// Simulamos una operación asíncrona (como guardar en una base de datos)
setTimeout(() => {
    try {
      // Si todo va bien, enviamos la acción para añadir la tarea
      dispatch({
        type: TYPES.ADD_TASK,
        payload: { text, category }
      });
      
      // Y marcamos la operación como exitosa
      dispatch({ type: TYPES.FETCH_SUCCESS });
    } catch (error) {
      // Si algo falla, enviamos el error
      dispatch({
        type: TYPES.FETCH_ERROR,
        payload: 'Error al agregar la tarea'
      });
    }
  }, 500); // Simulación de retraso de red
}, []);

    const toggleTask = useCallback((id) => {
        dispatch({
            type: TYPES.FETCH_START,
            payload:'toggleTask'
        });
        // Simulamos una operación asíncrona
    setTimeout(() => {
      try {
          // Enviamos la acción para cambiar el estado de la tarea
          dispatch({
              type: TYPES.TOGGLE_TASK,
              payload: id
          });
          
          // Marcamos la operación como exitosa
          dispatch({ type: TYPES.FETCH_SUCCESS });
      } catch (error) {
          // Manejamos cualquier error
          dispatch({
              type: TYPES.FETCH_ERROR,
              payload: 'Error al modificar la tarea'
          });
      }
  }, 500); // Simulación de retraso de red
}, []);

    const deleteTask = useCallback((id) => {
        //indicamos que vamos a iniciar una operacion
        dispatch({
            type: TYPES.FETCH_START,
            payload: 'deleteTask'
        });

        //simulamos una operacion asincrona
        setTimeout(() => {
            try {
                dispatch({
                    type: TYPES.DELETE_TASK,
                    payload: id
                });

                //marcamos la operacion como exitosa
                dispatch({ type: TYPES.FETCH_SUCCESS})
            } catch {
                dispatch({
                    type: TYPES.FETCH_ERROR,
                    payload: 'Error al eliminar la tarea'
                });
            }
        }, 500);
    }, [])

    //funciones para manipular las categorias y filtros

    const addCategory = useCallback((category) => {
        dispatch({
            type: TYPES.ADD_CATEGORY,
            payload: category
        });
    }, []);

    const setFilter = useCallback((filter) => {
      dispatch({
        type: TYPES.SET_FILTER,
        payload: filter
      });
    }, []);

    const clearError = useCallback(() => {
      dispatch({
        type: TYPES.CLEAR_ERROR
      });
    }, []);

    const clearSuccessMessage = useCallback(() => {
      dispatch({ type: TYPES.CLEAR_SUCCESS_MESSAGE });
    }, []);

    // === Creamos el objeto con todos los valores y funciones que vamos a compartir ===
    const value = {
      // Estado actual
      tasks: state.tasks,
      categories: state.categories,
      activeFilter: state.activeFilter,
      isLoading: state.isLoading,
      error: state.error,
      successMessage: state.successMessage,
      loadingOperation: state.loadingOperation,
      
      // Funciones para manipular el estado
      addTask,
      toggleTask,
      deleteTask,
      addCategory,
      setFilter,
      clearError,
      clearSuccessMessage
    };


    return (
      <TaskContext.Provider value={value}>
        {children}
      </TaskContext.Provider>
    );


}

//Hook personalizado para acceder al contexto
export function useTaskContext() {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error('useTaskContext debe usarse dentro de un TaskProvider');
    }
    return context;

}