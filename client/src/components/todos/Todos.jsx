import { Button } from '../button/Button';
import { AddTask } from '../addTask/AddTask';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'
import { ReactComponent as UpdateIcon } from '../../assets/img/update.svg'

export const Todos = ({ tasks, onClick, setTasks, handleAdd }) => {

    console.log(tasks);

    return (
        <>
            <div className="div--todos">
                <table className="table--todos">
                    <thead>
                        <tr className="tr--titles">
                            <th id="task">Tâche</th>
                            <th id="state">&Eacute;tat</th>
                            <th id="action"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks && tasks.map((row) => (
                            <tr>
                                <td headers="task">{row.task}</td>
                                <td headers="state">
                                    <p className={`state${row.id_state}`}>{row.state}</p>
                                </td>
                                <td headers="action">
                                    <Button variant="update">
                                        <UpdateIcon />
                                    </Button>
                                    <Button
                                        variant="delete"
                                        onClick={() => {
                                            fetch(`http://localhost:3001/api/${row.id_task}`, {
                                                method: 'DELETE',
                                            })
                                                .then((res) => res.json())
                                                .then((data) => {
                                                    console.log(row.id_task)
                                                    onClick(row.id_task)
                                                })
                                                .catch((err) => {
                                                    console.log(err)
                                                })
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddTask
                setTasks={setTasks}
                />
            </div>
        </>
    );
}