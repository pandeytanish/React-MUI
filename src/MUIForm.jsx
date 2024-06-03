import { Box, FormControl, TextField, Typography, InputLabel, OutlinedInput, IconButton, InputAdornment, FormControlLabel, Checkbox, Link, Button, Stack,Select,MenuItem } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react'
import { useState } from 'react';

const countries = [
    {
        name: 'Baharain',
        code: '+973',
        img: ''
    },
    {
        name: 'Oman',
        code: '+978',
        img: ''
    },
    {
        name: 'Egypt',
        code: '+20',
        img: ''
    },
    {
        name: 'KSK',
        code: '+966',
        img: ''
    }, {
        name: 'Qatar',
        code: '+974',
        img: ''
    }, {
        name: 'Kuwait',
        code: '+965',
        img: ''
    },
    {
        name: 'New Zealand',
        code: '+64',
        img: ''
    },
    {
        name: 'UAE',
        code: '+971',
        img: ''
    }

]

function MUIForm() {

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
    

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} >
            <FormControl onSubmit={handleSubmit} sx={{ border: '2px solid black', width: '400px', height: '600px', padding: '24px' }}>
                <Typography variant='h5'>Need an Account - Sign Up</Typography>
                <Typography variant='body2'>Basic Information</Typography>
                <TextField         value={formValues.fullName}
        onChange={handleChange('fullName')}
        error={Boolean(formErrors.fullName)}
        helperText={formErrors.fullName}
 margin='dense' sx={{ marginTop: '10px' }} id="outlined-basic" label="Full Name" variant="outlined" />
                <TextField margin='dense' sx={{ marginTop: '10px' }} id="outlined-basic" label="Email Address" variant="outlined" />
                <TextField margin='dense' sx={{ marginTop: '10px' }} id="outlined-basic" label="Country" variant="outlined" />
                <TextField margin='dense' sx={{ marginTop: '10px' }} id="outlined-basic" label="Phone Number" variant="outlined" />
                <FormControl sx={{ width: '46.5ch', marginTop: '10px' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label={
                        <>
                            I agree to the{' '}
                            <Link href="https://example.com/terms" target="_blank" rel="noopener">
                                Terms and Conditions
                            </Link>
                        </>
                    }
                />
                <Stack sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button type="submit" variant='contained' sx={{ width: '300px', height: '50px' }}>Sign Up</Button>
                    <Typography margin='dense' variant='body1'>Already have an account? <Link>Sign In</Link></Typography>

                </Stack>
            </FormControl>


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
            <MenuItem key={country.code} value={country.name}>
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
        </Box>
    )
}

export default MUIForm