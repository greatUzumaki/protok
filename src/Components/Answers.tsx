import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { Iqa } from '../Configs/QA';

const useStyles = makeStyles(() => ({
  radio: {
    color: '#ffffff',
    fontWeight: 400,
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    width: 450,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        border: 0,
      },
    },
    '@media (max-width: 800px)': {
      width: 250,
    },
  },
  number: {
    width: 130,
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        border: 0,
      },
    },
  },
  select: {
    width: 'max-content',
    minWidth: 200,
    '@media (max-width: 800px)': {
      width: 300,
    },
  },
  cont: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
}));

interface IAnsw {
  answ: Iqa;
  id: number;
  userValue: string;
  setVal: (value: string) => void;
}

const RadioAnsw = (props: IAnsw) => {
  const classes = useStyles();
  const [dop, setDop] = useState(false);

  const handleChange = (value: any) => {
    props.setVal(value);
    if (value === 'Да') setDop(true);
    if (value === 'Нет') setDop(false);
  };

  return props.answ.answers.length > 3 ? (
    <div className={classes.cont}>
      <FormControl fullWidth style={{ alignItems: 'center' }}>
        <Select
          value={props.userValue}
          onChange={(e) => handleChange(e.target.value)}
          className={classes.select}
          variant='outlined'
        >
          {props.answ.answers.map((answ) => {
            return <MenuItem value={answ}>{answ}</MenuItem>;
          })}
        </Select>
      </FormControl>
      {props.userValue === 'Другое' && (
        <TextField
          variant='outlined'
          onChange={(e) => handleChange(e.target.value)}
          className={classes.text}
        />
      )}
    </div>
  ) : (
    <div className={classes.cont}>
      <FormControl component='fieldset'>
        <RadioGroup
          name={props.answ.title}
          className={classes.radioContainer}
          value={props.userValue}
          onChange={(e) => handleChange(e.target.value)}
        >
          {props.answ.answers?.map((answ) => (
            <FormControlLabel
              className={classes.radio}
              value={answ}
              control={<Radio />}
              label={answ}
              labelPlacement='top'
            />
          ))}
        </RadioGroup>
      </FormControl>
      {dop && props.id === 20 && (
        <TextField
          variant='outlined'
          className={classes.text}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </div>
  );
};

const TextAnsw = (props: IAnsw) => {
  const classes = useStyles();

  const handleChange = (value: any) => {
    props.setVal(value);
  };

  const min = props.answ.answers[0];
  const max = props.answ.answers[1];

  return props.answ.type === 'number' ? (
    <TextField
      variant='outlined'
      type='number'
      InputProps={{
        inputProps: {
          min: min,
          max: max,
        },
        endAdornment: (
          <InputAdornment position='end'>{props.answ.label}</InputAdornment>
        ),
      }}
      error={props.userValue < min || props.userValue > max}
      onChange={(e) => handleChange(e.target.value)}
      className={classes.number}
      defaultValue={props.answ.answers && props.answ.answers[0]}
    />
  ) : (
    <TextField
      variant='outlined'
      onChange={(e) => handleChange(e.target.value)}
      className={classes.text}
    />
  );
};

export const Answers = (props: IAnsw) => {
  return (
    <div>
      {props.answ.type === 'radio' ? (
        <RadioAnsw
          answ={props.answ}
          id={props.id}
          userValue={props.userValue}
          setVal={props.setVal}
        />
      ) : (
        <TextAnsw
          answ={props.answ}
          id={props.id}
          userValue={props.userValue}
          setVal={props.setVal}
        />
      )}
    </div>
  );
};
