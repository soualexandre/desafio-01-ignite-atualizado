import { useState } from 'react'
import Clipboard from './assets/Clipboard.svg'
import './global.css';
import style from './app.module.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask';
import { HeaderBody } from './components/HeaderBody';
import { Task } from './components/Task';

function App() {
  const [count, setCount] = useState(0);
  const [tasksList, setTasksList] = useState([]);

  // function handleCompleteTask(id: number) {

  //   const cc = tasks.filter(task => {
  //     return task.id === id;
  //   });

  //   cc.isCompleted ? cc.isCompleted[2] = false : cc.isCompleted[2] = true;
  //   console.log(cc)
  // }

  // function handleCreateNewTask() {
  //   setTasksList([...tasks, count]);
  // }

  const tasks = [
    {
      id: 0,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      isCompleted: true
    },
    {
      id: 1,
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda ullam deserunt dignissimos consectetur suscipit totam sapiente tenetur maiores. Sunt, voluptatibus reprehenderit! At rerum consequuntur sit natus repellat molestiae nihil!',
      isCompleted: false

    },
    {
      id: 2,
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda ullam deserunt dignissimos consectetur suscipit totam sapiente tenetur maiores. Sunt, voluptatibus reprehenderit! At rerum consequuntur sit natus repellat molestiae nihil!',
      isCompleted: true
    }
  ]
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <InputNewTask createNewTask={handleCreateNewTask} />
        <HeaderBody />
        {
          tasks.length === 0 ?
            <section className={style.secttionTasks}>
              <div className={style.isNotFoudTask}>
                <img src={Clipboard} alt="Icons task" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </section>
            :
            tasks.map(task => {
              return (
                <Task
                  id={task.id}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  completedTask={handleCompleteTask}
                />
              );
            })
        }
      </div>
    </>
  )
}

export default App
