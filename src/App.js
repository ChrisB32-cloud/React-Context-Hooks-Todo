import TodoApp from './components/TodoApp';


// -- useReducer --
//  - const [state, dispatch] = useReducer(reducer, initialArg, init); -
//    - Am alternative to useState. Accepts a reducer of type (state, action) => newState,
//  and returns the current state paired with a dispatch method. 
//  ( If you're familiar with Redux, you already know how this works. )

//    - (useReducer) is usually preferable to (useState) when you have
//  complex state logic that involves multiple sub-value or when the next state 
//  depends on the previous one. (useReducer) also lets you optimize performance
//  for components that trigger deep updates because you can 
//  pass dispatch down instead of callbacks

//    - Here's a counter example from the useState section, rewritten to use a reducer.

// const initialState = {count: 0};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }

//    - NOTE: React guarantees that dispatch function identity is stable
//  and won't change on re-renders. This is why it's safe to omit from the 
//  (useEffect) or (useCallBack) dependency list.


function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
