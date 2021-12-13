import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Task = ({task, onRemove}) => {
    return (
        <Card style={{marginTop:"15px"}} onClick={() => onRemove(task.id)}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {task.name}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                    {task.time.toLocaleDateString()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
