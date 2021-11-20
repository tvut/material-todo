import { FormControl, InputLabel, Input, Typography, TextField, Button } from "@mui/material"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DatePicker';
import { useState } from 'react';

export const AddTask = () => {
    const [date, setDate] = useState(null);

    return (
        <>
            <Typography variant="h5" component="h5">
                    Add A To-Do
            </Typography>
            {date !== null && date.toString()}
            <FormControl style={{width:"100%", marginTop:10}}>
                <InputLabel htmlFor="task-input">Task</InputLabel>
                <Input style={{marginBottom:20}} id="task-input" aria-describedby="input task" />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="Task Due Date"
                        value={date}
                        onChange={(newValue) => {
                        setDate(newValue);
                        console.log(date);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button variant="contained" style={{maxWidth:100, marginTop:10}}>
                    Add
                </Button>
            </FormControl>
        </>
    )
}
