/**
 * CustomTextField Component
 * 
 * This component represents a custom text input field with specified label, value, and optional maximum length.
 * It restricts the input value length based on the maxLength prop if provided.
 * 
 * @param label The label displayed for the input field.
 * @param value The value of the input field.
 * @param onChange Function called when the input field value changes.
 * @param maxLength Optional maximum length for the input field value.
 */

import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface CustomTextFieldProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  label: string; // Label displayed for the input field
  value: string; // Value of the input field
  onChange: (value: string) => void; // Function called when the input field value changes
  maxLength?: number; // Optional maximum length for the input field value
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, value, onChange, maxLength, ...rest }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      return;
    }
    onChange(e.target.value);
  };

  return (
    <TextField
      label={label} // Set the label for the input field
      value={value} // Set the value of the input field
      onChange={handleChange} // Call handleChange function when input value changes
      inputProps={{ maxLength }} // Pass maxLength to inputProps
      {...rest} // Spread other props
      sx={{
        width: "100%",
        marginBottom: "1rem",
      }}
    />
  );
};

export default CustomTextField;