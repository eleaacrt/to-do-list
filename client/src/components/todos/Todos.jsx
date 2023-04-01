import { Button } from '../button/Button';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'
import { ReactComponent as UpdateIcon } from '../../assets/img/update.svg'

export const Todos = ({ tasks }) => {

    console.log(tasks);

    return (
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
                            <Button variant="change">
                                <UpdateIcon />
                            </Button>
                            <Button variant="delete">
                                <DeleteIcon />
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}