import React from 'react';
import useToggle from '../hooks/useToggle';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import TodoEdit from './TodoEdit';

const TodoTask = ({
  tasks,
  taskId,
  handleTodoDelete,
  taskChecked,
  handleCompleted,
  handleUpdate
}) => {
  const [formSwitch, setFormSwitch] = useToggle(false);
  const handleDelete = () => {
    handleTodoDelete(taskId);
  };
  const handleCheckClick = () => {
    handleCompleted(taskId);
  };
  const editForm = () => {
    setFormSwitch(true);
  };
  const closeUpdateForm = closeForm => {
    setFormSwitch(closeForm);
  };
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
              {tasks}
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
            taskPass={tasks}
            id={taskId}
            handleUpdate={handleUpdate}
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

export default TodoTask;
