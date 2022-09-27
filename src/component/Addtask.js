import React from 'react'
import {useState} from'react'



const Addtask = ({onAdd}) => {
    const [text,setText]=useState('')
    // let [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
     
        
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
        alert('Please add a task')
        return}
      
        let day=''
        {
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          let myDate=new Date();
          let date=months[myDate.getMonth()]+' '+myDate.getDate()+'th'
          let d=myDate.getHours()
          let m=myDate.getMinutes()
          let time=(d>12?(d-12):d)+':'+(m>9?m:('0'+m))+' '+(d>=12?'pm':'am')
           day=date+' at '+time
          }
          // setDay(day)
          console.log(day)
          //console.log(newDate)
        onAdd({text,day,reminder})

        setText('')
        // setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Task</label>
          <input type='text' placeholder='Add Task'
          value={text}
          onChange={(e)=>setText(e.target.value)}
          />
        </div>
      {/*<div className='form-control'>
          <label>Date & Time</label>
          <input type='text' placeholder='Add Day & Time'
           value={day}
          onChange={(e)=>setDay(e.target.value)}
           />
  </div>*/}
        <div className='form-control form-control-check'>
          <label>Set Reminder</label>
          <input type='checkbox'
          checked={reminder}
           value={reminder}
          onChange={(e)=>setReminder(e.currentTarget.checked)} 
          />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default Addtask
