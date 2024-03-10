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
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleToggleCompleted = () => {
    if (onToggleCompleted) {
      onToggleCompleted(task.id); // Pass taskId to onToggleCompleted if it exists
    }
  };

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

  const priorityColor = getPriorityColor(task.priority);
  const titleColor = task.completed ? '#008000' : priorityColor; // Green if completed, otherwise priority color
  const cardBorderColor = task.completed ? '#008000' : priorityColor;

  const formatDate = (date: Date): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      return ""; // Return empty string if the date is not valid
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  return (
    <Card variant="outlined" style={{ width: '300px', height: '220px', borderColor: cardBorderColor, borderWidth: '2px', backgroundColor: '#ffffffc4' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom style={{ color: titleColor }}>
          {task.title}
        </Typography>
        <Typography color="textSecondary" style={{ height: '50px', overflowX: 'hidden', overflowY: 'auto', whiteSpace: 'normal', wordWrap: 'break-word' }}>
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
              {task.completed ? 'Mark as active' : 'Mark as completed'}
            </Typography>
          </div>
          <Button variant="outlined" color="error" onClick={handleDeleteTask}>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
