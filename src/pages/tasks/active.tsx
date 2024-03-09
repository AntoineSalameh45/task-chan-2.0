"use client";
import React, { useState } from 'react';
import TaskCard, { Task } from '../../components/molecules/taskcard';
import Navbar from '@/components/organisms/navbar';

const ActivePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className='flex gap-4 flex-wrap'>
          {tasks.map(task => (
              <TaskCard key={task.id} task={task} />
          ))}
          </div>
    </main>
    </>
  );
};

export default ActivePage;