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
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 90,
    flexGrow: 1,
  },
  button: {
    fontWeight: 600,
    color: '#ffffff',
    border: 'solid 1px',
    borderRadius: 2,
    letterSpacing: 1,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    display: 'flex',
  },
  question: {
    fontSize: 20,
    color: '#ffffff',
    letterSpacing: 1,
    fontWeight: 600,
    borderBottom: 'solid 1px white',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  root2: {
    backgroundColor: secondColor,
    height: 550,
    width: 700,
    boxShadow: '10px 10px 20px 0px rgb(37 42 46 / 20%);',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 40,
    padding: 40,
  },
  desc: {
    fontWeight: 500,
    color: '#ffffff',
    fontSize: 18,
    letterSpacing: 1,
  },
}));

export const Calc = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [finish, setFinish] = useState(false);

  const classes = useStyles();

  const maxQuestions = questionAnswer.length;

  const userValues: any = [];

  return finish ? (
    <div className={classes.root2}>
      <Typography className={classes.title} align='center'>
        Спасибо за ответы!
      </Typography>
      <Typography align='center' className={classes.desc}>
        Формируем проект, в ближайшее время с Вами свяжется наш менеджер
      </Typography>
    </div>
  ) : (
    <div className={classes.root}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>Вопрос</Typography>
        <Typography className={classes.title}>
          {currentQ + 1}/{maxQuestions}
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.question} align='center'>
          {questionAnswer[currentQ].title}
        </Typography>
        <Answers
          answ={questionAnswer[currentQ]}
          id={currentQ}
          userValues={userValues}
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

        {currentQ + 1 === maxQuestions ? (
          <Button
            className={classes.button}
            endIcon={<ArrowForward />}
            onClick={() => setFinish(true)}
          >
            Завершить опрос
          </Button>
        ) : (
          <Button
            className={classes.button}
            endIcon={<ArrowForward />}
            onClick={() => setCurrentQ((old) => old + 1)}
          >
            Далее
          </Button>
        )}
      </Box>
    </div>
  );
};
