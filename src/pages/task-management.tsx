// pages/task-management.tsx
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask } from '../store/taskslice';

const TaskManagementPage = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (title: string) => {
    const id = Math.floor(Math.random() * 1000); // Generate a random id
    dispatch(addTask({ id, title, completed: false }));
  };

  const handleToggleTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h1>Task Management Page</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => handleToggleTask(task.id)}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddTask('New Task')}>Add Task</button>
    </div>
  );
};

export default TaskManagementPage;
