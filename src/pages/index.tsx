import React, { useState } from 'react';
import Navbar from "@/components/organisms/navbar";
import TaskForm, { Task } from "@/components/molecules/taskform";

const Home = () => {

  return (
    <>
    <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative flex place-items-center ">
          <TaskForm />
        </div>
      </main>
    </>
  );
}

export default Home;