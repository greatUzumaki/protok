import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React from 'react';
import { secondColor } from '../Configs/Colors';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: secondColor,
    height: 500,
    width: 700,
    boxShadow: '10px 10px 20px 0px rgb(37 42 46 / 20%);',
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
  },
  title: {
    fontWeight: 700,
    color: '#ffffff',
    fontSize: 26,
    letterSpacing: 1,
  },
  questions: {
    flexGrow: 1,
  },
  button: {
    fontWeight: 600,
    color: '#ffffff',
  },
}));

export const Calc = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Вопрос</Typography>
      <Box className={classes.questions}></Box>
      <Box>
        <Button startIcon={<ArrowBack />} className={classes.button}>
          Назад
        </Button>
        <Button className={classes.button} endIcon={<ArrowForward />}>
          Далее
        </Button>
      </Box>
    </div>
  );
};
