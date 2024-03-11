/**
 * TaskCard Component
 * 
 * This component represents a task card with details such as title, description, priority, and completion status.
 * It allows users to mark tasks as completed or delete them.
 * 
 * @param task The task object containing details such as id, title, description, priority, and completion status.
 * @param onDeleteTask Function to handle the deletion of a task. Accepts the task id as an argument.
 * @param onToggleCompleted Optional function to handle toggling the completion status of a task. Accepts the task id as an argument.
 */

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Task } from './taskform';

interface TaskCardProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  onToggleCompleted?: (taskId: string) => void; // Accepts taskId as argument
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDeleteTask, onToggleCompleted }) => {
  // Function to handle task deletion
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  // Function to handle toggling task completion status
  const handleToggleCompleted = () => {
    if (onToggleCompleted) {
      onToggleCompleted(task.id); // Pass taskId to onToggleCompleted if it exists
    }
  };

  // Function to get priority color based on task priority
  const getPriorityColor = (priority: "Low" | "Medium" | "High" | "Urgent") => {
    switch (priority) {
      case "Low":
        return "#808080"; // Grey
      case "Medium":
        return "#CCCC00"; // Darker Yellow
      case "High":
        return "#FF8C00"; // Darker Orange
      case "Urgent":
        return "#FF0000"; // Red
      default:
        return "#808080"; // Grey
    }
  };

  // Priority color based on task priority
  const priorityColor = getPriorityColor(task.priority);
  
  // Title color: Green if completed, otherwise priority color
  const titleColor = task.completed ? '#008000' : priorityColor; 

  // Card border color: Green if completed, otherwise priority color
  const cardBorderColor = task.completed ? '#008000' : priorityColor;

  // Function to format date
  const formatDate = (date: Date): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return ""; // Return empty string if the date is not valid
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  // Description style including scrollbar color based on completion status and overflow handling
  const descriptionStyle: React.CSSProperties = {
    height: '50px',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    scrollbarColor: `${priorityColor} transparent`, // Set scrollbar thumb color
    overflowX: 'hidden',
  };

  // Set scrollbar thumb color to green for completed tasks, otherwise based on priority
  if (task.completed) {
    descriptionStyle.scrollbarColor = `green transparent`; 
  } else {
    descriptionStyle.scrollbarColor = `${priorityColor} transparent`; 
  }

  // Check if the description text overflows
  const isOverflowing = task.description.length * 8 > 270; // Assuming 8px per character, adjust accordingly

  // Set overflowY to auto if the description text overflows
  if (isOverflowing) {
    descriptionStyle.overflowY = 'auto';
  }

  return (
    <Card variant="outlined" style={{ width: '270px', height: '220px', borderColor: cardBorderColor, borderWidth: '2px', backgroundColor: '#ffffffc4' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom style={{ color: titleColor }}>
          {task.title}
        </Typography>
        <Typography color="textSecondary" style={descriptionStyle}>
          {task.description}
        </Typography>
        <Typography style={{ color: priorityColor }}>
          Priority: {task.priority}
        </Typography>

        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className='flex items-center'>
            <Checkbox
              checked={task.completed}
              onChange={handleToggleCompleted}
              inputProps={{ 'aria-label': 'task completed' }}
            />
            <Typography color="textSecondary" style={{ fontSize: 'small' }}>
              {task.completed ? 'Mark as active' : 'Mark as done'}
            </Typography>
          </div>
          <Button variant="outlined" color="error" onClick={handleDeleteTask}>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;