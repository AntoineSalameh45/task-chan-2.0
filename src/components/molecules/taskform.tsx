/**
 * TaskForm Component
 * 
 * This component represents a form for adding a new task.
 */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import CustomTextField from "../atoms/customTextfield";
import CustomButton from "../atoms/customButton";
import { addTask } from "../../store/taskslice";
import CustomDateField from "../atoms/customDateField";

/**
 * Task interface representing the structure of a task object.
 */
export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

/**
 * TaskForm Component
 * 
 * @returns JSX.Element
 */
const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date()); // Initialize with Date object

  /**
   * Handles form submission.
   * 
   * @param e Event object
   */
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

  // Check if the form is valid
  const isFormValid = title.trim() !== "" && description.trim() !== "";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ background:"#ffffff69", width: "50vw", padding: "20px", border: "2px solid #8F00FF" }}>
        <CustomTextField
          label="Task title"
          value={title}
          onChange={(value) => setTitle(value)}
          maxLength={20} // Limit input length to 20 characters
        />

        <CustomTextField
          label="Task description"
          value={description}
          onChange={(value) => setDescription(value)}
          maxLength={200} // Limit input length to 200 characters
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}> 
          <div style={{ flex: 2 }}> {/* Set width for the CustomDateField */}
            <CustomDateField 
              label="Due date" 
              value={dueDate} 
              onChange={(value: Date) => setDueDate(value)}
            />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}> {/* Add marginLeft to create space between the two components */}
            <CustomButton text="Add Task" disabled={!isFormValid} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;