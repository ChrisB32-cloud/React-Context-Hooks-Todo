import React, { useContext } from 'react';
import { TodosContext } from '../context/todo.context'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TodoTask from './TodoTask';

function TodoList() {
  const todos = useContext(TodosContext)
  return (
    <Paper>
      <List>
        {todos.map(m => (
          <TodoTask
            key={m.id}
            taskTodo={m.task}
            taskId={m.id}
            taskChecked={m.completed}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
