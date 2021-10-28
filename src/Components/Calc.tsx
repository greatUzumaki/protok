import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import React, { useState } from 'react';
import { secondColor } from '../Configs/Colors';
import { questionAnswer } from '../Configs/QA';
import { Answers } from './Answers';

const useStyles = makeStyles(() => ({
  rootConatiner: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    backgroundColor: secondColor,
    height: 250,
    boxShadow: '10px 10px 15px 0px rgb(37 42 46 / 25%);',
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
    '@media (max-width: 900px)': {
      padding: 15,
    },
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: 700,
    color: '#ffffff',
    fontSize: 20,
    letterSpacing: 1,
    '@media (max-width: 1200px)': {
      fontSize: 17,
    },
    '@media (max-width: 900px)': {
      fontSize: 15,
    },
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
    border: 'solid 2px',
    borderRadius: 2,
    letterSpacing: 1,
    marginBottom: 30,
    marginTop: 30,
    width: 300,
    height: 50,
  },
  buttonContainer: {
    justifyContent: 'center',
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
    boxShadow: '10px 10px 20px 0px rgb(37 42 46 / 20%);',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: 40,
    padding: 40,
  },
  desc: {
    fontWeight: 500,
    color: '#ffffff',
    fontSize: 18,
    letterSpacing: 1,
  },
  count: {
    fontWeight: 700,
    color: '#ffffff',
    fontSize: 20,
    letterSpacing: 1,
    borderLeft: 'solid 2px white',
    paddingLeft: 10,
    '@media (max-width: 1200px)': {
      fontSize: 17,
    },
    '@media (max-width: 900px)': {
      fontSize: 15,
    },
  },
}));

export const Calc = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [finish, setFinish] = useState(false);

  const classes = useStyles();

  const maxQuestions = questionAnswer.length;

  const userValues: any = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  const repeat = () => {
    setFinish(false);
    setCurrentQ(0);
  };

  return finish ? (
    <Container>
      <div className={classes.root2}>
        <Box style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
          <Typography className={classes.title} align='center'>
            Спасибо за ответы!
          </Typography>
          <Typography align='center' className={classes.desc}>
            Формируем проект, в ближайшее время с Вами свяжется наш менеджер
          </Typography>
        </Box>
        <Button className={classes.button} onClick={repeat}>
          Заполнить заного
        </Button>
      </div>
    </Container>
  ) : (
    <Container maxWidth='lg' className={classes.rootConatiner}>
      {questionAnswer.map((qa, index) => {
        return (
          <div className={classes.root} id={`${index}`}>
            <Box className={classes.titleContainer}>
              <Typography className={classes.title}>{qa.title}</Typography>
              <Typography className={classes.count}>{index + 1}</Typography>
            </Box>
            <Box className={classes.container}>
              <Answers answ={qa} id={index} userValues={userValues} />
            </Box>
          </div>
        );
      })}
      <Box className={classes.buttonContainer}>
        <Button className={classes.button}>Завершить опрос</Button>
      </Box>
    </Container>
  );
};
