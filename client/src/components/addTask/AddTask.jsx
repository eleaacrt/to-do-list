import { Button } from '../button/Button'
import { ReactComponent as AddIcon } from '../../assets/img/add.svg'
import { useForm } from 'react-hook-form'
import { useRef } from 'react';

export const AddTask = ({ setTasks }) => {

    const input = useRef(null)
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        fetch('http://localhost:3001/api', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({task: input.current.value}),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
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
            })
            .catch((err) => {
                console.log(err)
            })
            input.current.value="";
    }

    return (
        <form className="form--addtask" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="task" hidden>Ajouter une tâche</label>
                <input
                    type="text"
                    id="task"
                    {...register("task")}
                    placeholder="Tâche à effectuer"
                    ref={input}
                />
            </div>
            <Button
                variant="add"
                type="submit"
            >
                <AddIcon />
            </Button>
        </form>
    )
}