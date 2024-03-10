import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface CustomDateFieldProps extends Omit<TextFieldProps, 'onChange' | 'value' | 'type'> {
  label: string;
  value: Date;
  onChange: (value: Date) => void;
}

const CustomDateField: React.FC<CustomDateFieldProps> = ({ label, value, onChange, ...rest }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value); // Convert the input value to a Date object
    onChange(selectedDate);
  };

  const formattedDate = value.toISOString().split('T')[0]; // Format the Date object to string for input value

  return (
    <TextField
      type="date"
      label={label}
      value={formattedDate}
      onChange={handleChange}
      {...rest}
      sx={{
        width: "100%",
        marginBottom: "1rem",
      }}
    />
  );
};

export default CustomDateField;