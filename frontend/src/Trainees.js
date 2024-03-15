import { useState } from "react"

function Trainees(){
    var [trainees, setTrainees]= useState([])
    var name 
    console.log("trainees added" , trainees)
    function handleName(e){
        name = e.target.value
    }
    function markAttendance(){
       trainees.push(name)
       var newflat = [...trainees]
       setTrainees(newflat)
    }
    return (
        <div>
            <input onChange={handleName} placeholder="Enter Your Name" />
            <button onClick={markAttendance}>Mark Attendance</button>
            {trainees.map(function(each){
                return (
                    <li>{each}</li>
                )
            })}
           
        </div>
    )
}

export default Trainees