import React, { useContext } from 'react';
import { TodosContext } from '../context/todo.context'
import useInputState from '../hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const TodoEdit = ({ taskPass, id, closeUpdateForm }) => {
  const [text, setText, resetText] = useInputState(taskPass);
  const { handleUpdate } = useContext(TodosContext)
  const handleSubmit = e => {
    e.preventDefault();
    handleUpdate({ id: id, task: text, completed: false });
    closeUpdateForm(false);
    resetText();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={text}
          onChange={setText}
          margin="normal"
          label="AddTodo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoEdit;

