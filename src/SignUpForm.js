import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  Stack,
  Box,
  Select,
  MenuItem
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const countries = [
  {
      name: 'Baharain',
      code: '+973',
      img: 'https://image.similarpng.com/very-thumbnail/2021/04/Waving-Bahrain-flag-icon-isolated-on-transparent-background-PNG.png'
  },
  {
      name: 'Oman',
      code: '+978',
      img: 'https://png.pngtree.com/png-vector/20220427/ourmid/pngtree-oman-flag-icon-png-gold-border-png-image_4557809.png'
  },
  {
      name: 'Egypt',
      code: '+20',
      img: 'https://image.similarpng.com/very-thumbnail/2020/06/Egypt-flag-icon-on-transparent-background-PNG.png'
  },
  {
      name: 'KSK',
      code: '+966',
      img: 'https://w7.pngwing.com/pngs/367/785/png-transparent-saudi-arab-asia-circle-country-flag-nation-national-o-shaped-flag-icon.png'
  }, {
      name: 'Qatar',
      code: '+974',
      img: 'https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-circular-world-flag-qatar-icon-png-image_4830149.png'
  }, {
      name: 'Kuwait',
      code: '+965',
      img: 'https://cdn-icons-png.flaticon.com/512/197/197459.png'
  },
  {
      name: 'New Zealand',
      code: '+64',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWHRvRfDYPYxXa2dbCZeYluMlQeF1fsnuZw&s'
  },
  {
      name: 'UAE',
      code: '+971',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeswJD5ECFO5XRuDZKKX2xR0JBajD0pjXSHw&s'
  }

]


function SignUpForm() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    showPassword: false,
  });


  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    let errors = {};
    if (!formValues.fullName) errors.fullName = 'Full Name is required';
    if (!formValues.email) errors.email = 'Email Address is required';
    if (!formValues.country) errors.country = 'Country is required';
    if (!formValues.phone) errors.phone = 'Phone Number is required';
    if (!formValues.password) errors.password = 'Password is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Handle form submission
      console.log('Form submitted', formValues);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
    <FormControl
      sx={{ border: '2px solid black', width: '400px', height: 'auto', padding: '24px' }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5">Need an Account - Sign Up</Typography>
      <Typography variant="body2">Basic Information</Typography>
      <TextField
        margin="dense"
        sx={{ marginTop: '10px' }}
        id="full-name"
        label="Full Name"
        variant="outlined"
        value={formValues.fullName}
        onChange={handleChange('fullName')}
        error={Boolean(formErrors.fullName)}
        helperText={formErrors.fullName}
      />
      <TextField
        margin="dense"
        sx={{ marginTop: '10px' }}
        id="email-address"
        label="Email Address"
        variant="outlined"
        value={formValues.email}
        onChange={handleChange('email')}
        error={Boolean(formErrors.email)}
        helperText={formErrors.email}
      />
        <FormControl
        margin="dense"
        sx={{ marginTop: '10px', width: '100%' }}
      >
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={formValues.country}
          onChange={handleChange('country')}
          label="Country"
          error={Boolean(formErrors.country)}
        >
          {countries.map((country) => (
            <MenuItem key={country.name} value={country.name}>
              {country.name} ({country.code})
            </MenuItem>
          ))}
        </Select>
        {formErrors.country && (
          <Typography variant="caption" color="error">
            {formErrors.country}
          </Typography>
        )}
      </FormControl>
      <TextField
        margin="dense"
        sx={{ marginTop: '10px' }}
        id="phone-number"
        label="Phone Number"
        variant="outlined"
        value={formValues.phone}
        onChange={handleChange('phone')}
        error={Boolean(formErrors.phone)}
        helperText={formErrors.phone}
      />
      <FormControl sx={{ width: '46.5ch', marginTop: '10px' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={formValues.showPassword ? 'text' : 'password'}
          value={formValues.password}
          onChange={handleChange('password')}
          error={Boolean(formErrors.password)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {formValues.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {formErrors.password && (
          <Typography variant="caption" color="error">
            {formErrors.password}
          </Typography>
        )}
      </FormControl>
      <FormControlLabel
        control={<Checkbox required />}
        required
        label={
          <>
            I agree to the{' '}
            <Link href="" >
              Terms and Conditions
            </Link>
          </>
        }
      />
      <Stack sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <Button variant="contained" sx={{ width: '300px', height: '50px' }} onClick={() => console.log(formValues)}  type="submit">
          Sign Up
        </Button>
        <Typography margin="dense" variant="body1">
          Already have an account? <Link>Sign In</Link>
        </Typography>
      </Stack>
    </FormControl>
    </Box>

  );
}

export default SignUpForm;
