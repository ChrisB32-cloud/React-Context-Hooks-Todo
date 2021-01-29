import React from 'react';
import { TodosProvider } from '../context/todo.context'
// import useTodoState from '../hooks/useTodoState';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';


// testing new memo branch

const TodoApp = () => {

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
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;


