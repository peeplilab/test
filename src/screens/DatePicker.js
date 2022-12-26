import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { setFromDate,setToDate } from '../actions';
import { connect } from 'react-redux'

function MaterialUIPicker(props) {
    const date = new Date();

  const [value, setValue] = React.useState(
    date
  );

  const handleFromChange = (newValue) => {
    setValue(newValue);
    props.setFromDate(newValue);
  };
  const handleToChange = (newValue) => {
    setValue(newValue);
    props.setToDate(newValue);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleFromChange}
          renderInput={(params) => <TextField {...params} />}
        />
         <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleToChange}
          renderInput={(params) => <TextField {...params} />}
        />
       
      </Stack>
    </LocalizationProvider>
  );
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    setFromDate: (data) => dispatch(setFromDate(data)),
    setToDate: (data) => dispatch(setToDate(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MaterialUIPicker)