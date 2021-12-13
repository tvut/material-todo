import { FormControl, InputLabel, Input, Typography, TextField, Button } from "@mui/material"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DatePicker';
import { useState } from 'react';

export const AddTask = ({onAdd}) => {
    const [name, setName] = useState('');
    const [time, setTime] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        onAdd({name, time})
        setTime(null)
        setName('')
    }

    return (
        <>
            <Typography variant="h5" component="h5">
                    Add A To-Do
            </Typography>
            <form onSubmit={onSubmit}>
                <FormControl style={{width:"100%", marginTop:10}}>
                    <InputLabel htmlFor="task-input">Task</InputLabel>
                    <Input onChange={(e) => setName(e.target.value)} style={{marginBottom:20}} id="task-input" aria-describedby="input task" />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Task Due Date"
                            value={time}
                            onChange={(newValue) => {
                            setTime(newValue);
                            console.log(time);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button type='submit' variant="contained" style={{maxWidth:100, marginTop:10}}>
                        Add
                    </Button>
                </FormControl>
            </form>
        </>
    )
}
