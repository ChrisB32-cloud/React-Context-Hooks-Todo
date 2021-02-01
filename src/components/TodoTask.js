import React, { useContext, memo } from 'react';
import { DispatchContext } from '../context/todo.context'
import useToggle from '../hooks/useToggle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import TodoEdit from './TodoEdit';

const TodoTask = ({ taskTodo, taskId, taskChecked }) => {
  const [formSwitch, setFormSwitch] = useToggle(false);
  const dispatch = useContext(DispatchContext)
  const handleDelete = () => {
    // handleTodoDelete(taskId);
    dispatch({ type: "DELETE_TODO", id: taskId })
  };
  const handleCheckClick = () => {
    // handleCompleted(taskId);
    dispatch({ type: "COMPELETEED_TODO", id: taskId })
  };
  const editForm = () => {
    setFormSwitch(true);
  };
  const closeUpdateForm = closeForm => {
    setFormSwitch(closeForm);
  };
  console.log('Re-render: ', taskId);
  return (
    <div>
      <ListItem>
        <Checkbox
          onClick={handleCheckClick}
          tabIndex={-1}
          checked={taskChecked}
          aria-label="CheckBox"
          color="default"
        />
        {formSwitch === false ? (
          <>
            <ListItemText
              style={{ textDecoration: taskChecked ? 'line-through' : 'none' }}
            >
              {taskTodo}
            </ListItemText>
            <Button
              onClick={handleDelete}
              aria-label="Delete"
              style={{ backgroundColor: '#807d75', marginRight: '0.5rem' }}
            >
              x
            </Button>
          </>
        ) : (
            <TodoEdit
              taskPass={taskTodo}
              id={taskId}
              // handleUpdate={handleUpdate}
              closeUpdateForm={closeUpdateForm}
            />
          )}
        <Button
          onClick={editForm}
          aria-label="Edit"
          style={{ backgroundColor: '#807d75', marginRight: '0.5rem' }}
        >
          {formSwitch === false ? <EditIcon /> : 'x'}
        </Button>
      </ListItem>
      <Divider />
    </div>
  );
};

export default memo(TodoTask);
