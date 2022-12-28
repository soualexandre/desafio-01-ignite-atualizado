import style from './InputNewTask.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react';


interface InputTask{
    createNewTask: () => vpid;
}

export function InputNewTask({createNewTask}: InputTask) {

    const [newTask, setNewTask] = useState('');
    const [taskText, setTaskText] = useState([]);

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setTaskText(event.target.value);
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
    }

    return (
        taskText.map(task => {
            <form onSubmit={handleCreateNewTask} className={style.containerInput}>
                <input
                    type="text"
                    name="tasksNAme"
                    onChange={handleTaskChange}
                    placeholder='Adicione uma nova tarefa.' />
                <button>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        })
    );
}