import React, { useContext } from 'react';
import { DispatchContext } from '../context/todo.context'
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';

const TodoForm = (props) => {
  const [text, setText, resetText] = useInputState('');
  const dispatch = useContext(DispatchContext)
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", task: text })
    // handleTodoPass(text);
    // handleTodoPass({ id: uuidv4(), task: text, completed: false });
    resetText();
  };
  return (
    <Paper style={{ padding: '0 1rem', margin: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={text}
          onChange={setText}
          margin="normal"
          label="Add Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
