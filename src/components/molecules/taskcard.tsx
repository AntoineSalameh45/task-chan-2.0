import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  onToggleCompleted: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleCompleted, onDeleteTask }) => {
  const handleToggleCompleted = () => {
    onToggleCompleted(task.id);
  };

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
            checked={task.completed}
            onChange={handleToggleCompleted}
            inputProps={{ 'aria-label': 'toggle task completed' }}
          />
          <Button variant="outlined" color="error" onClick={handleDeleteTask}>Delete</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;