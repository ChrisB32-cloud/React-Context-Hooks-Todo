import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TodoTask from './TodoTask';

const TodoList = ({
  tasks,
  handleTodoDelete,
  handleCompleted,
  handleUpdate
}) => {
  return (
    <Paper>
      <List>
        {tasks.map(m => (
          // <>
          <TodoTask
            key={m.id}
            tasks={m.task}
            taskId={m.id}
            taskChecked={m.completed}
            handleTodoDelete={handleTodoDelete}
            handleCompleted={handleCompleted}
            handleUpdate={handleUpdate}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
