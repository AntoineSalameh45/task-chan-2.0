import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import CustomTextField from "../atoms/customTextfield";
import CustomButton from "../atoms/customButton";
import { addTask } from "../../store/taskSlice";
import CustomDateField from "../atoms/customDateField";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date()); // Initialize with Date object

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    const today = new Date();
    const timeDifference = dueDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    let priority: "Low" | "Medium" | "High" | "Urgent" = "Low";
    if (daysDifference <= 1) {
      priority = "Urgent";
    } else if (daysDifference <= 3) {
      priority = "High";
    } else if (daysDifference <= 7) {
      priority = "Medium";
    }

    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
      dueDate: dueDate,
      priority: priority, // Use dynamically calculated priority
    };
    
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate(new Date()); // Set to Date object
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "";

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", background:"#ffffff69", width: "50vw", padding: "20px" }}>
        <CustomTextField
          label="Task title"
          value={title}
          onChange={(value) => setTitle(value)} // Update onChange handler
        />
        <CustomTextField
          label="Task description"
          value={description}
          onChange={(value) => setDescription(value)} // Update onChange handler
        />
        <CustomDateField 
          label="Due date" 
          value={dueDate} 
          onChange={(value: Date) => setDueDate(value)} // Accept Date
        />
        <div style={{ display: "flex", alignItems: "center" }}> {/* Container for priority and button */}
          <CustomButton text="Add Task" disabled={!isFormValid} />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
