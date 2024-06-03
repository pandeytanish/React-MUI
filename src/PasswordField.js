import React, { useState } from 'react';
import { TextField, Box, Typography, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [requirements, setRequirements] = useState({
    length: false,
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false,
  });

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setRequirements({
      length: newPassword.length >= 8,
      hasNumber: /\d/.test(newPassword),
      hasUpperCase: /[A-Z]/.test(newPassword),
      hasLowerCase: /[a-z]/.test(newPassword),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box>
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {password && (
        <Box mt={2}>
          <Typography variant="body2" color={requirements.length ? 'green' : 'red'}>
            Minimum 8 characters
          </Typography>
          <Typography variant="body2" color={requirements.hasNumber ? 'green' : 'red'}>
            At least one number
          </Typography>
          <Typography variant="body2" color={requirements.hasUpperCase ? 'green' : 'red'}>
            At least one uppercase letter
          </Typography>
          <Typography variant="body2" color={requirements.hasLowerCase ? 'green' : 'red'}>
            At least one lowercase letter
          </Typography>
          <Typography variant="body2" color={requirements.hasSpecialChar ? 'green' : 'red'}>
            At least one special character
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default PasswordField;
