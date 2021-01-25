import React, { useEffect } from 'react';
import useTodoState from '../hooks/useTodoState';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';


const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Wash Jeep', completed: false }
  ];

  const {
    tasks,
    handleTodoPass,
    handleTodoDelete,
    handleCompleted,
    handleUpdate
  } = useTodoState(initialTodos);

  useEffect(() => {
    localStorage.setItem('allTodos', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: 'lightSlateGrey'
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" styles={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit"> React Todo with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '2rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm handleTodoPass={handleTodoPass} />
          <TodoList
            tasks={tasks}
            handleTodoDelete={handleTodoDelete}
            handleCompleted={handleCompleted}
            handleUpdate={handleUpdate}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;


