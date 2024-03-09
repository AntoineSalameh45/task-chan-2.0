"use client";
import React, { useState } from 'react';
import TaskCard, { Task } from '../../../components/molecules/taskcard';
import Navbar from '@/components/organisms/navbar';
import VideoDetails from '@/components/organisms/videoDetails';

const DetailsPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Navbar />
      <div className='h-[100vh] w-[100vw] relative flex justify-center self-center flex-wrap overflow-x-hidden'>
        <VideoDetails />
      </div>
    </>
  );
};

export default DetailsPage;