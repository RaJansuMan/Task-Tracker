import Header from "./component/Header"
import Tasks from "./component/Tasks"
import Addtask from "./component/Addtask"
import {useState} from'react'

const App=()=> {
  const[showAdd,setShowAdd]=useState(true)
  const[tasks,setTasks]=useState([
    {
      id:1,
      text:'Doctor appointment',
      day:'Feb 5th at 2:30 pm',
      reminder:true,
    },
    {
      id:2,
      text:'class',
      day:'Feb 5th at 2:30 pm',
      reminder:true,
    },
    {
      id:3,
      text:'party',
      day:'Feb 5th at 2:30 pm',
      reminder:true,
    },
  ])

  function onDelete (id){
    setTasks(tasks.filter((task)=>task.id!==id))
  }
 function onDoubleClick(id){
  setTasks(tasks.map((task)=>task.id===id
  ?{...task,reminder:!task.reminder}
  :task))
 }


 function onAdd(task){
  console.log(task)
   const id=Math.floor(Math.random()*1000)+1
   const newTask={id,...task}
   setTasks([...tasks,newTask])
 }
   return (
    <div className="container">
      <Header title='Task Tracker' showAdd={()=>setShowAdd(!showAdd)}
       addValue={showAdd}/> 
      {  showAdd ?< Addtask onAdd={onAdd}/>:''}
      {tasks.length > 0
        ?<Tasks tasks={tasks} onClick={onDelete} onDoubleClick={onDoubleClick}/>
        : <p>No Task</p>
      }
    </div>
  );
}


export default App;
