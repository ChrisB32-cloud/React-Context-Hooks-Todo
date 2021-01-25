import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState'


const defaultValues = [
    { id: 1, task: 'Wash Jeep', completed: false },
    { id: 2, task: 'Order parts', completed: false },
    { id: 3, task: 'Wash Dishes', completed: false }
]

export const TodosContext = createContext()

export function TodosProvider(props) {

    const todosThings = useTodoState(defaultValues);


    return (
        <TodosContext.Provider value={todosThings} >
            {props.children}
        </TodosContext.Provider>
    )
}