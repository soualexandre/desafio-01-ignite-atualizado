import style from './Task.module.css'
import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';

interface Task {
    id: number;
    content: string;
    isCompleted: boolean;
    completedTask: (id: number) => void;
}
export function Task({ id, content, completedTask, isCompleted}: Task) {
    const [isChecked, setIsChecked] = useState(false);
    const [foundTask, setFoundTask] = useState(0);

    function handleCheckTask() {
        // isChecked ? setIsChecked(false) : setIsChecked(true);
        completedTask(id);
    }

    return (
        <div className={style.task}>
                <div key={id} className={style.taskCard}>
                    <div onClick={handleCheckTask} className={isCompleted ? style.checkboxChecked : style.checkbox}>
                        {
                            isCompleted ? <Check weight='bold' color='#fff' size={12} /> : ''
                        }
                    </div>
                    <p>{content}</p>
                    <button  title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </div>
        </div>
    );
}