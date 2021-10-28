import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
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
  userValues: [];
}

const RadioAnsw = (props: IAnsw) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return props.answ.answers && props.answ.answers?.length > 4 ? (
    <div className={classes.cont}>
      <FormControl fullWidth style={{ alignItems: 'center' }}>
        <Select
          value={value}
          onChange={handleChangeSelect}
          className={classes.select}
          variant='outlined'
        >
          {props.answ.answers.map((answ) => {
            return <MenuItem value={answ}>{answ}</MenuItem>;
          })}
        </Select>
      </FormControl>
      {value === 'Другое' && (
        <TextField variant='outlined' className={classes.text} />
      )}
    </div>
  ) : (
    <div className={classes.cont}>
      <FormControl component='fieldset'>
        <RadioGroup
          name={props.answ.title}
          className={classes.radioContainer}
          value={value}
          onChange={handleChange}
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
      {value === 'Другое' && (
        <TextField variant='outlined' className={classes.text} />
      )}
    </div>
  );
};

const TextAnsw = (props: IAnsw) => {
  const classes = useStyles();

  return props.answ.type === 'number' ? (
    <TextField
      variant='outlined'
      type='number'
      InputProps={{
        inputProps: {
          min: props.answ.answers && props.answ.answers[0],
          max: props.answ.answers && props.answ.answers[1],
        },
        endAdornment: (
          <InputAdornment position='end'>{props.answ.label}</InputAdornment>
        ),
      }}
      error={true}
      className={classes.number}
      defaultValue={props.answ.answers && props.answ.answers[0]}
    />
  ) : (
    <TextField variant='outlined' className={classes.text} />
  );
};

export const Answers = (props: IAnsw) => {
  return (
    <div>
      {props.answ.type === 'radio' ? (
        <RadioAnsw
          answ={props.answ}
          id={props.id}
          userValues={props.userValues}
        />
      ) : (
        <TextAnsw
          answ={props.answ}
          id={props.id}
          userValues={props.userValues}
        />
      )}
    </div>
  );
};
