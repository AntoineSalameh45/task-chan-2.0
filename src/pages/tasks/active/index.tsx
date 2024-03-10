import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store';
import { deleteTask, updateTaskStatus } from '../../../store/taskslice';
import { Task } from '../../../components/molecules/taskform';

const ActivePage: React.FC = () => {
  const dispatch = useDispatch();
  const activeTasks = useSelector((state: RootState) => state.tasks.tasks.filter(task => !task.completed));

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
          {activeTasks.length > 0 ? (
            activeTasks.map((task: Task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDeleteTask={handleDeleteTask}
                onToggleCompleted={handleToggleCompleted} // Pass the handleToggleCompleted function
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
