/**
 * CustomDateField Component
 * 
 * This component represents a custom date input field with specified label and value.
 * It converts the input value to a Date object and formats the Date object to a string for input value.
 * 
 * @param label The label displayed for the input field.
 * @param value The Date value of the input field.
 * @param onChange Function called when the input field value changes.
 */

import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface CustomDateFieldProps extends Omit<TextFieldProps, 'onChange' | 'value' | 'type'> {
  label: string; // Label displayed for the input field
  value: Date; // Date value of the input field
  onChange: (value: Date) => void; // Function called when the input field value changes
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
      label={label} // Set the label for the input field
      value={formattedDate} // Set the formatted date as input value
      onChange={handleChange} // Call handleChange function when input value changes
      {...rest} // Spread other props
      sx={{
        width: "100%",
        marginBottom: "1rem",
      }}
    />
  );
};

export default CustomDateField;