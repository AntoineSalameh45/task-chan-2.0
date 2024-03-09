"use client";
import React, { useState } from "react";
import CustomTextField from "../atoms/textfield";
import CustomButton from "../atoms/button";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskFormProps {
  addTask: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [taskIdCounter, setTaskIdCounter] = useState(1); // Initialize ID counter

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate title and description
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    // Create a new task object with incremented ID
    const newTask: Task = {
      id: taskIdCounter.toString(), // Use current counter value as ID
      title: title,
      description: description,
      completed: false,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setTaskIdCounter(taskIdCounter + 1); // Increment ID counter
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "";

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <CustomTextField
          label="Task title"
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <CustomTextField
          label="Task description"
          value={description}
          onChange={(value) => setDescription(value)}
        />
        <CustomButton text="Add Task" disabled={!isFormValid} />
      </form>
    </div>
  );
};

export default TaskForm;