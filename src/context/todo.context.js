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
    // To avoid re-renders we can remove the curly bracets from the value seeing in
    // each context we are only passing in one value. This will help the rendering issue but
    // we need to go through each component and remove the curly bracets from 
    // todos and dispatch because we will no longer be destructering them 
    // out of an object. The reason we are doing this is because
    // with the double curly bracets we are making a new Object each render
    // casusing a render on each update.
    // NOTE: If we pass in more than one value in a context we have to 
    // use double curly bracets.

    return (
        <TodosContext.Provider value={todos} >
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}