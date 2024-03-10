import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { deleteTask, updateTaskStatus } from '../../../store/taskSlice';
import { Task } from '../../../components/molecules/taskform';

const ActivePage: React.FC = () => {
  const dispatch = useDispatch();
  const activeTasks = useSelector((state: RootState) => state.tasks.tasks.filter(task => !task.completed));

  // Sort tasks by priority from high to low
  const sortedActiveTasks = activeTasks.sort((a, b) => {
    if (a.priority === "Urgent") return -1;
    if (b.priority === "Urgent") return 1;
    if (a.priority === "High") return -1;
    if (b.priority === "High") return 1;
    if (a.priority === "Medium") return -1;
    if (b.priority === "Medium") return 1;
    return 0; // If both are Low or equal priority
  });

  const handleDeleteTask = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleCompleted = (taskId: string) => {
    dispatch(updateTaskStatus({ taskId, completed: true }));
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {sortedActiveTasks.length > 0 ? (
            sortedActiveTasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onToggleCompleted={handleToggleCompleted}
              />
            ))
          ) : (
            <p>No active tasks yet.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default ActivePage;
