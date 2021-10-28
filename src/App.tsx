import { createTheme, ThemeProvider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import './App.css';
import { Calc } from './Components/Calc';
import { Title } from './Components/Title';

const useStyles = makeStyles(() => ({
  root: {
    MinHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  second: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Title />
        <div className={classes.second} id='calc'>
          <Calc />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
