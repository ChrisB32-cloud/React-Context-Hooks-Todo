import React, { createContext, useReducer } from 'react';
import reducer from '../reducer/todo.reducer'
import useTodoState from '../hooks/useTodoState'


const defaultValues = [
    { id: 1, task: 'Wash Jeep', completed: false },
    { id: 2, task: 'Order parts', completed: false },
    { id: 3, task: 'Wash Dishes', completed: true }
]

export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props) {

    const [todos, dispatch] = useReducer(reducer, defaultValues);


    return (
        <TodosContext.Provider value={{ todos }} >
            <DispatchContext.Provider value={{ dispatch }}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}