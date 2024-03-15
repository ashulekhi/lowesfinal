import axios from "axios"
import { useState } from "react"
function Userlist(){
    var [users,setUsers] = useState([])

    function getUsers(){
        axios({
            url:"http://localhost:5000/allusers",
            method:"get"
        }).then((response)=>{
            setUsers(response.data.data)
        })
    }
    return (
        <div>
            <h1>Users List</h1>
            <button onClick={getUsers}>Get Users</button>
            {users.map((each)=>{
                return(
                    <l1><h1>{each.email}</h1></l1>
                )
            })
            }
        </div>
    )
}

export default Userlist