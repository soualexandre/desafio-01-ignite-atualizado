import style from './HeaderBody.module.css';

interface CountTasks {
    createdTasks: number;
    completedTasks: number;
  }
export function HeaderBody({createdTasks, completedTasks}: CountTasks){
    return (
        <>
        <header className={style.headerBody}>
            <p>Tarefas criadas <span>{createdTasks}</span></p>
            <p>Tarefas concluídas <span>{completedTasks} de {createdTasks}</span></p>
        </header>
        </>
    );
}