import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from "@/components/organisms/navbar";
import TaskForm, { Task } from "@/components/molecules/taskform";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const router = useRouter();

  const handleAddTask = (newTask: Task) => {
    // Add new task to the tasks array
    setTasks([...tasks, newTask]);
    // Navigate to the active task page and pass tasks data as query parameter
    router.push({
      pathname: 'tasks/active',
      query: { tasks: JSON.stringify([...tasks, newTask]) }
    });
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center ">
          <TaskForm addTask={handleAddTask} />
        </div>
      </main>
    </>
  );
}

export default Home;
