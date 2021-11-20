import { Card, CardContent, Typography, Button } from "@mui/material"
import { AddTask } from "./AddTask"
import { useState } from "react"

export const Header = () => {
    const [add, setAdd] = useState(true)

    return (
        <Card>
            <CardContent>
                <Typography variant="h2" component="h1" style={{display: 'inline-block'}}>
                    To-Do
                </Typography>
                <Button color={add ? 'error' : 'success'} onClick={() => setAdd(!add)} variant="contained" style={{display: 'inline-block', float: 'right'}}>
                    {add ? 'Close' : 'Add Task'}
                </Button>
                {add && <AddTask/>}
            </CardContent>
        </Card>
    )
}
