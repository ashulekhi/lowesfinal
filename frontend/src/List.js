import { useEffect, useState } from "react"
import Item from "./Item"
import axios from "axios"
import Mobile from "./Mobile"

function List(){
    var [mobiles,setMobiles] = useState([])
   
    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:5000/allmobiles"
        }).then((response)=>{
            setMobiles(response.data.data)
        })
    },[])
    return (
        <div className="row">
          {
            mobiles.map((each)=>{
                return (
                    <Mobile data={each} />
                )
            })
          }
        </div>
    )
}

export default List