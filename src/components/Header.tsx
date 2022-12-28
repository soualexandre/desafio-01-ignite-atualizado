import style from './Header.module.css'
import toDoLogo from '../assets/Logo.svg'

export function Header() {
    return (
        <div className={style.header}>
            <img src={toDoLogo} alt="Logo da aplicação" />
        </div>
    );
}