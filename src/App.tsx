import { useState, FormEvent } from 'react'
import Clipboard from './assets/Clipboard.svg'
import './global.css';
import style from './app.module.css'
import { Header } from './components/Header'
import { InputNewTask } from './components/InputNewTask';
import { HeaderBody } from './components/HeaderBody';
import { Task } from './components/Task';
import uuid from 'react-uuid';

interface taskObject {
  id: number;
  content: string;
  isCompleted: boolean
}
function App() {

  const [count, setCount] = useState(0);
  const [tasksList, setTasksList] = useState<taskObject>([]);

  function handleCompleteTask(id: number) {
    let result2 = tasksList.reduce((acc, task) => {

      let obj = id.includes(task.id) ? Object.assign(task, task.isCompleted ?  {isCompleted: false} :  {isCompleted: true}) : task;
      
      acc.push(obj);
  
      return acc;
  
  }, []);

  setTasksList(result2)
  }

  function handleCreateNewTask(taskValue: string, event: FormEvent) {

    const task = ({
      id: uuid(),
      content: taskValue,
      isCompleted: false
    });

    setTasksList([...tasksList, task]);
  }

  const createdTasks = tasksList.length;

  const countCompletedTasks = tasksList.filter(tasksCompleted => {
    return tasksCompleted.isCompleted === true;
  });

  const completedTasks = countCompletedTasks.length;

  function onDeleteTask(id: number){
      const commentsWithoudDeletedOne = tasksList.filter(task => {
          return task.id !== id;
      });
      setTasksList(commentsWithoudDeletedOne);
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <InputNewTask createNewTask={handleCreateNewTask} />
        <HeaderBody createdTasks={createdTasks} completedTasks={completedTasks}  />
        {
          tasksList.length === 0 ?
            <section className={style.secttionTasks}>
              <div className={style.isNotFoudTask}>
                <img src={Clipboard} alt="Icons task" />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </section>
            :
            tasksList.map(task => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  isCompleted={task.isCompleted}
                  completedTask={handleCompleteTask}
                  deleteTask={onDeleteTask}
                />
              );
            })
        }
      </div>
    </>
  )
}

export default App
