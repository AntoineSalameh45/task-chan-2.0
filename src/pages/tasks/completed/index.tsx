import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '@/components/organisms/navbar';
import TaskCard from '@/components/molecules/taskcard';
import { RootState } from '../../../store'; // Import RootState as a type
import { Task } from '../../../components/molecules/taskcard'; // Import Task interface

const CompletedPage: React.FC = () => {
  const completedTasks = useSelector((state: RootState) => state.completedTasks.completedTasks);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {/* Map through completed tasks and render TaskCard for each completed task */}
          {completedTasks.map((task: Task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleCompleted={() => {}} // Pass an empty function or implement logic if necessary
              onDeleteTask={() => {}} // Pass an empty function or implement logic if necessary
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default CompletedPage;
