import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { secondColor, thirdColor } from '../Configs/Colors';
import Back from '../Images/back.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: 320,
    backgroundColor: thirdColor,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 42,
    letterSpacing: 1,
  },
  button: {
    backgroundColor: secondColor,
    borderRadius: 2,
    color: '#ffffff',
    fontWeight: 600,
    width: 200,
    height: 56,
    '&:hover': {
      backgroundColor: '#1f75ab',
    },
    letterSpacing: 1,
    transition: 'all .3s',
  },
}));

export const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Калькулятор КТП</Typography>
      <Button className={classes.button} href='#calc'>
        Рассчитать КТП
      </Button>
    </div>
  );
};
