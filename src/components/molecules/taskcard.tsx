// TaskCard.tsx
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
  checked?: boolean;
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

  return (
    <Card variant="outlined" style={{ marginBottom: '1rem', width: '200px' }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {task.title}
        </Typography>
        <Typography color="textSecondary">
          {task.description}
        </Typography>
        <Typography color="textSecondary">
          {task.id}
        </Typography>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Checkbox
            checked={task.completed}
            onChange={handleToggleCompleted}
            inputProps={{ 'aria-label': 'task completed' }}
          />
          <Button variant="outlined" color="error" onClick={handleDeleteTask}>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
