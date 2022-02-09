import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import {AppBar, Container, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
   <AppBar position='fixed'>
      <Container fixed>
      <IconButton edge='start' color='inherit' aria-label='menu'>
        <MenuIcon/>
      <Typography variant='h6'>
        My web
      </Typography>
      </IconButton>
        </Container>
        </AppBar>
  );
}

export default App;
