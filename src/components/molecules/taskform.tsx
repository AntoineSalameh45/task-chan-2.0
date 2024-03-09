import React, { useState } from "react";
import CustomTextField from "../atoms/textfield";
import CustomButton from "../atoms/button";

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  creationDate: Date;
  dueDate: Date;
  priority: "Low" | "Medium" | "High" | "Urgent"; // Updated priority type
}

interface TaskFormProps {
  addTask: (newTask: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState<"Low" | "Medium" | "High" | "Urgent">("Low"); // Updated priority state
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
      creationDate: new Date(),
      dueDate: dueDate,
      priority: priority,
    };
    addTask(newTask);
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setPriority("Low"); // Reset priority to default value
    setTaskIdCounter(taskIdCounter + 1); // Increment ID counter
  };

  const isFormValid = title.trim() !== "" && description.trim() !== "";

  // Function to get color based on priority level
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
        <CustomTextField
          type="date"
          label="Due date"
          value={dueDate.toISOString().split('T')[0]} // Convert date to string format
          onChange={(value) => setDueDate(new Date(value))}
        />
        <label htmlFor="priority">Priority:</label>
        <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value as "Low" | "Medium" | "High" | "Urgent")}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Urgent">Urgent</option>
        </select>
        <CustomButton text="Add Task" disabled={!isFormValid} />
      </form>
      {/* Display selected priority color */}
      <div style={{ marginTop: "20px", backgroundColor: getPriorityColor(priority), width: "100px", height: "20px" }}></div>
    </div>
  );
};

export default TaskForm;
