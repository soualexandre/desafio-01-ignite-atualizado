import style from './InputNewTask.module.css';
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState, FormEvent } from 'react';
interface InputTask{
    createNewTask:(newTask: string) => void;
}

interface taskObject {
    id: number;
    content: string;
    isCompleted: boolean
  }

interface NewTask{
    newTask: string;
}
export function InputNewTask({createNewTask}: InputTask) {

    const [newTask, setNewTask] = useState('');

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value)
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();       
        createNewTask(newTask);
    }

    return (
            <form onSubmit={handleCreateNewTask} className={style.containerInput}>
                <input
                    type="text"
                    name="tasksName"
                    onChange={handleTaskChange}
                    placeholder='Adicione uma nova tarefa.' />
                <button>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
    );
}