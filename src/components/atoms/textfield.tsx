import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface CustomTextFieldProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ label, value, onChange, ...rest }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      {...rest}
      sx={{
        width: "100%",
        marginBottom: "1rem",
      }}
    />
  );
};

export default CustomTextField;