import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React, { useState } from 'react';
import { secondColor } from '../Configs/Colors';
import { questionAnswer } from '../Configs/QA';
import { Answers } from './Answers';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: secondColor,
    height: 550,
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
  container: {
    flexGrow: 1,
  },
  button: {
    fontWeight: 600,
    color: '#ffffff',
    border: 'solid 1px',
    borderRadius: 2,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  question: {
    color: '#ffffff',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const Calc = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>Вопрос</Typography>
        <Typography className={classes.title}>
          {currentQ + 1}/{questionAnswer.length}
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.question}>
          {questionAnswer[currentQ].title}
        </Typography>
        <Answers
          type={questionAnswer[currentQ].type}
          answers={questionAnswer[currentQ].answers}
        />
      </Box>
      <Box className={classes.buttonContainer}>
        {currentQ > 0 ? (
          <Button
            startIcon={<ArrowBack />}
            className={classes.button}
            onClick={() => setCurrentQ((old) => old - 1)}
          >
            Назад
          </Button>
        ) : (
          <div></div>
        )}

        <Button
          className={classes.button}
          endIcon={<ArrowForward />}
          onClick={() => setCurrentQ((old) => old + 1)}
        >
          Далее
        </Button>
      </Box>
    </div>
  );
};
