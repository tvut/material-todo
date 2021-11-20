import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Task = ({task}) => {
    return (
        <Card style={{marginTop:"15px"}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {task.name}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                    {task.time}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
