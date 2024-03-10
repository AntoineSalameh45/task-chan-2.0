// TaskForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import CustomTextField from "../atoms/textfield";
import CustomButton from "../atoms/button";
import { addTask } from "../../store/taskslice";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  creationDate: Date;
  dueDate: Date;
  priority: "Low" | "Medium" | "High" | "Urgent";
}

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState<"Low" | "Medium" | "High" | "Urgent">("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    const newTask: Task = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
      creationDate: new Date(),
      dueDate: dueDate,
      priority: priority,
    };
    
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setPriority("Low");
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "";

  const getPriorityColor = (priority: "Low" | "Medium" | "High" | "Urgent") => {
    switch (priority) {
      case "Low":
        return "grey";
      case "Medium":
        return "yellow";
      case "High":
        return "orange";
      case "Urgent":
        return "red";
      default:
        return "grey";
    }
  };

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
        <CustomTextField
          type="date"
          label="Due date"
          value={dueDate.toISOString().split('T')[0]}
          onChange={(value) => setDueDate(new Date(value))} // Update onChange handler
        />
        <label htmlFor="priority">Priority:</label>
        <select id="priority" value={priority} onChange={(e) => setPriority(e.currentTarget.value as "Low" | "Medium" | "High" | "Urgent")}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
        <CustomButton text="Add Task" disabled={!isFormValid} />
      </form>
      <div style={{ marginTop: "20px", backgroundColor: getPriorityColor(priority), width: "100px", height: "20px" }}></div>
    </div>
  );
};

export default TaskForm;
