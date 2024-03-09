import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Task } from '../molecules/taskform'; // Adjust the import path accordingly

interface TaskCardProps {
  task: Task;
  onDeleteTask: (taskId: string) => void;
  checked?: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDeleteTask, checked }) => {
  const handleDeleteTask = () => {
    onDeleteTask(task.id);
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
            checked={checked}
            disabled // Disable the checkbox for completed tasks
            inputProps={{ 'aria-label': 'task completed' }}
          />
          <Button variant="outlined" color="error" onClick={handleDeleteTask}>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
