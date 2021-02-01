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


// -- memo --

// const MyComponent = React.memo(function MyComponent(props) {
//     render using props 
// });

// - (memo) is a higher order component

// - If your component renders the same result given the same props, you
// can wrap it in a call to (memo) for a performance boost in some cases
// by memorizing the result. This means that React will skip rendering 
// the component, and reuse the last rendered result.

// (memo) only checks for prop changes. If your function component wrapped 
// in (memo) has a (useState) or (useContext) Hook in its implementation, it
// will still re-render when state or context change.

// - By default it will only shallowly compare complex in the props object. If
// you want control over the comparison, you can also provide a custom comparison 
// function as the second argument.

//  function MyComponent(props) {
/* render using props */
//  }
//  function areEqual(prevProps, nextProps) {
/*
return true if passing nextProps to render would return
the same result as passing prevProps to render,
otherwise return false
*/
//  }
//  export default React.memo(MyComponent, areEqual);

// - This method only exist as a performance optiimzation. Do not 
// rely on it to "prevent" a render, as this can lead to bugs.

// NOTE: This is similar to using PureComponent with classes but is limited
// it is used in the components with passed down props for a performance
// boost only.


function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
