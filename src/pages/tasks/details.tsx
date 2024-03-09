"use client";
import React, { useState } from 'react';
import TaskCard, { Task } from '../../components/molecules/taskcard';
import Navbar from '@/components/organisms/navbar';
import VideoDetails from '@/components/organisms/videoDetails';

const DetailsPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
        <Navbar />
        <VideoDetails />
    </>
  );
};

export default DetailsPage;