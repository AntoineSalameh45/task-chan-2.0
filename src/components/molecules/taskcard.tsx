
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
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
            #{task.id}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;