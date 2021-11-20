import { Task } from "./Task"

const AllTasks = ({tasks}) => {
    return (
        <>
        {tasks.map((task) => (<Task key={task.id} task={task}/>))}
        </>
    )
}

export default AllTasks
