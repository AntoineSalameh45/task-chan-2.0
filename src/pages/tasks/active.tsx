import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TaskCard, { Task } from '../../components/molecules/taskcard';
import Navbar from '@/components/organisms/navbar';

const ActivePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Get the tasks data from the query parameter
    const tasksData = router.query.tasks;
    if (tasksData && typeof tasksData === 'string') {
      // Parse the tasks data from JSON string to array
      const parsedTasks: Task[] = JSON.parse(tasksData);
      // Set the tasks data to the state
      setTasks(parsedTasks);
    }
  }, [router.query.tasks]);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex gap-4 flex-wrap'>
          {/* Map through tasks and render TaskCard for each task */}
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </main>
    </>
  );
};

export default ActivePage;
