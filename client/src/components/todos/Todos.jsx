import { Button } from '../button/Button';
import { AddTask } from '../addTask/AddTask';
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'
import { ReactComponent as UpdateIcon } from '../../assets/img/update.svg'
import { useState } from 'react';

export const Todos = ({ tasks, onClick, setTasks, search, }) => {

    const states = [{
        id: 1,
        name: "À faire"
    }, {
        id: 2,
        name: "En cours"
    }, {
        id: 3,
        name: "Fait"
    }, {
        id: 4,
        name: "En retard"
    }];

    const [IdTask, setIdTask] = useState(0)

    const handleUpdate = (event) => {
        const newState = event.target.value;
        if (IdTask !== '-' && newState !== '-') {
            fetch(`http://localhost:3001/api/${IdTask}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ state: newState }),
            })
                .then((res) => res.json())
                .then((data) => {
                    // Do something with the response data
                    fetch('http://localhost:3001/api', {
                        method: 'GET',
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            setTasks(data)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    setIdTask(0)
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


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

                        {tasks && tasks.filter(row => {
                            if (search === "") {
                                return row;
                            } else if (row.task.toLowerCase().includes(search.toLowerCase())) {
                                return row;
                            }
                        }).map((row) => (
                            <tr>
                                <td headers="task">{row.task}</td>
                                <td headers="state">
                                    {
                                        IdTask === row.id_task ?
                                            <select name="state" id="state" onChange={handleUpdate}>
                                                <option value="-">Sélectionner...</option>
                                                {states.map((state) => (
                                                    <option className={`state${state.id}`}value={state.id}>{state.name}</option>
                                                ))}
                                            </select>

                                            : (
                                                <p className={`state${row.id_state}`}>{row.state}</p>
                                            )
                                    }
                                </td>
                                <td headers="action">
                                    <Button
                                        variant="update"
                                        onClick={() => {
                                            setIdTask(row.id_task)
                                        }}
                                    >
                                        <UpdateIcon />
                                    </Button>
                                    <Button
                                        variant="delete"
                                        onClick={() => {
                                            fetch(`http://localhost:3001/api/${row.id_task}`, {
                                                method: 'DELETE',
                                            })
                                                .then((res) => res.json())
                                                .then(() => {
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