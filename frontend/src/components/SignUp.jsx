import React, { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Component = styled(Box)({
  width: '400px',
  margin: 'auto',
  boxShadow: '5px 2px 5px 2px rgb(0 0 0/0.5)',
});

const Image = styled('img')({
  width: '100px',
  display: 'flex',
  margin: 'auto',
  paddingTop: '50px',
  marginTop: '20px',
});

const Wrapper = styled(Box)({
  padding: '25px 35px',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

const SignupButton = styled(Button)({
  textTransform: 'uppercase',
  backgroundColor: '#fb6414',
  color: 'white',
});

const LoginButton = styled(Link)({
  textTransform: 'uppercase',
  backgroundColor: '#fff',
  color: '#fb6414',
  boxShadow: '0 2px 4px 0 rgb(0 0 0/0.5)',
  textDecoration: 'none',
  height: '2rem',
  paddingTop: '8px',
});

const Text = styled(Typography)({
  fontSize: '15px',
  color: '#878787',
  margin: '8px 0px',
});

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit it
      try {
        await axios.post('/api/users/signup', {
          name,
          email,
          password,
        });
        alert('Signup successfully!');
      } catch (error) {
        alert(error);
      }
    }
  };

  const imageURL =
    'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="img" />

        <form onSubmit={submitHandler}>
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              label="Enter username"
            />
            <TextField
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              label="Enter email"
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              label="Enter password"
              error={!!errors.password}
              helperText={errors.password}
            />
            <TextField
              variant="standard"
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Enter Confirm password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />

            <SignupButton
              variant="contained"
              sx={{ marginTop: '20px' }}
              type="submit"
            >
              SignUp
            </SignupButton>
            <Text variant="subtitle1" sx={{ textAlign: 'center' }}>
              OR
            </Text>
            <LoginButton variant="text" color="info" to="/login">
              Already have an account
            </LoginButton>
          </Wrapper>
        </form>
      </Box>
    </Component>
  );
};

export default Login;
