import uuid from 'uuid'
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: uuid(), task: action.task, completed: false }];
        case "DELETE_TODO":
            return (state.filter(t => t.id !== action.id));
        case "COMPELETEED_TODO":
            return state.map(t => t.id === action.id ? { ...t, completed: !t.completed } : t);
        case "UPDATE_TODO":
            return state.map(t => t.id === action.id ? { ...t, task: action.newTask, completed: passUpdate.completed } : t);
        default:
            return state;
    }

}

export default reducer;



//     handleTodoPass: passTodo => {
//       setTasks([...tasks, passTodo]);
//     },
//     handleTodoDelete: passedId => {
//       setTasks(tasks.filter(t => t.id !== passedId));
//     },
//     handleCompleted: taskId => {
//       const toggleCompleted = tasks.map(t =>
//         t.id === taskId ? { ...t, completed: !t.completed } : t
//       );
//       setTasks(toggleCompleted);
//     },
//     handleUpdate: passUpdate => {
//       const updateTask = tasks.map(t =>
//         t.id === passUpdate.id
//           ? { ...t, task: passUpdate.task, completed: passUpdate.completed }
//           : t
//       );
//       setTasks(updateTask);
//     }