import React, { useState } from "react";
import { useDispatch } from "react-redux";
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

interface TaskFormProps {
  // No need to pass addTask as a prop anymore
}

const TaskForm: React.FC<TaskFormProps> = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState<"Low" | "Medium" | "High" | "Urgent">("Low");
  const [taskIdCounter, setTaskIdCounter] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") {
      return;
    }
    const newTask: Task = {
      id: taskIdCounter.toString(),
      title: title,
      description: description,
      completed: false, // Example value for completed
      creationDate: new Date(), // Example value for creationDate
      dueDate: dueDate,
      priority: priority,
    };
    
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setDueDate(new Date());
    setPriority("Low");
    setTaskIdCounter(taskIdCounter + 1);
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
          value={dueDate.toISOString().split('T')[0]}
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
      <div style={{ marginTop: "20px", backgroundColor: getPriorityColor(priority), width: "100px", height: "20px" }}></div>
    </div>
  );
};

export default TaskForm;
