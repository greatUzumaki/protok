import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import * as FileSaver from 'file-saver';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
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
  button2: {
    fontWeight: 600,
    border: 'solid 2px',
    borderRadius: 2,
    letterSpacing: 1,
    marginTop: 30,
    width: 150,
    height: 40,
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
    marginTop: 50,
    marginBottom: 50,
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
  buttons: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    width: '100%',
    marginBottom: 20,
  },
}));

interface IDialogMy {
  open: boolean;
  setClose: Function;
}

const DialogMy = (props: IDialogMy) => {
  const classes = useStyles();

  return (
    <Dialog open={props.open} onClose={() => props.setClose(false)}>
      <DialogTitle>Отправка данных формы</DialogTitle>
      <DialogContent>
        <TextField className={classes.field} placeholder='Название компании' />
        <TextField className={classes.field} placeholder='Контакты для связи' />
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.button2}
          onClick={() => props.setClose(false)}
          color='primary'
        >
          Отмена
        </Button>
        <Button
          className={classes.button2}
          onClick={() => props.setClose(false)}
          color='primary'
          autoFocus
        >
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const Calc = () => {
  const [finish, setFinish] = useState(false);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const [userValues, setUserValues] = React.useState<string[]>([]);

  const repeat = () => setFinish(false);

  const setUserValue = (value: string, index: number) => {
    setUserValues((old) => {
      const newArray = [...old];
      newArray[index] = value;
      return newArray;
    });
  };

  const exportToExcel = () => {
    const newArr: string[][] = questionAnswer.map((item, i) => [
      item.title,
      userValues[i],
    ]);
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = 'calculateKTP';

    const wb = XLSX.utils.book_new();
    wb.Props = {
      Title: 'CalculateKTP',
      Subject: 'КТП',
    };
    wb.SheetNames.push('КТП');
    const ws = XLSX.utils.aoa_to_sheet(newArr);
    wb.Sheets['КТП'] = ws;

    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
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
        <Box className={classes.buttons}>
          <Button className={classes.button} onClick={repeat}>
            Заполнить заного
          </Button>
          <Button className={classes.button} onClick={exportToExcel}>
            Скачать документ
          </Button>
          <Button className={classes.button} onClick={() => setOpen(true)}>
            Отправить данные
          </Button>
        </Box>
        <DialogMy open={open} setClose={setOpen} />
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
              <Answers
                answ={qa}
                id={index}
                userValue={userValues[index]}
                setVal={(value) => setUserValue(value, index)}
              />
            </Box>
          </div>
        );
      })}
      <Box className={classes.buttonContainer}>
        <Button
          className={classes.button}
          onClick={() => setFinish(true)}
          disabled={userValues.length !== questionAnswer.length}
        >
          Завершить опрос
        </Button>
      </Box>
    </Container>
  );
};
