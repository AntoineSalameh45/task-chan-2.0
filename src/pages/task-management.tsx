// pages/task-management.tsx
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask } from '../store/taskslice';
import { Task } from '../components/molecules/taskform'; // Import Task type
import { RootState } from '../store';

const TaskManagementPage = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (title: string) => {
    const id = Math.floor(Math.random() * 1000).toString();
    const newTask: Task = {
      id,
      title,
      description: "", // Add description property with an empty string
      completed: false,
      creationDate: new Date(), // Add creationDate property with the current date
      dueDate: new Date(), // Add dueDate property with the current date
      priority: "Low", // Add priority property with a default value
    };
    dispatch(addTask(newTask));
  };
  

  const handleToggleTask = (id: string) => { // Change id type to string
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
