import React from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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

const LoginButton = styled(Button)({
  textTransform: 'uppercase',
  backgroundColor: '#fb6414',
  color: 'white',
});

const SignupButton = styled(Link)({
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
  const imageURL =
    'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="img" />
        <Wrapper>
          <TextField variant="standard" label="Enter username" />
          <TextField variant="standard" label="Enter password" />

          <LoginButton variant="contained" sx={{ marginTop: '20px' }}>
            Login
          </LoginButton>
          <Text variant="subtitle1" sx={{ textAlign: 'center' }}>
            OR
          </Text>
          <SignupButton variant="text" color="info" to="/signup">
            Create an Account
          </SignupButton>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default Login;
