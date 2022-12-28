import style from './HeaderBody.module.css';


export function HeaderBody(){
    return (
        <>
        <header className={style.headerBody}>
            <p>Tarefas criadas <span>0</span></p>
            <p>Tarefas concluídas <span>0</span></p>
        </header>
        </>
    );
}