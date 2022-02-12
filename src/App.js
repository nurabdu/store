import React from 'react';
import {AppBar, Container, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import StandardimageList from './StandardimageList';

function App() {
  return (
   <AppBar position='fixed'>
      <Container fixed>
      <IconButton edge='start' color='inherit' aria-label='menu'>
        <MenuIcon/>
      <Typography variant='h6'>
        My web for sale socks
      </Typography>
      </IconButton>
        </Container>
        <StandardimageList/>
        </AppBar>
  );
}

export default App;
