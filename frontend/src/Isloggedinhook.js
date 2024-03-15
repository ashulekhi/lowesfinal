import axios from "axios"

function useIsLoggedin(){
    var [isloggedin,setIsloggedin] = useState(false)

    axios({
        method:"get",
        url:"http://localhost:5000/iasauthenticated",
        headers:{
            "aithorization":"some token"
        }
    }).then((response)=>{
        setIsloggedin(true)
    })

    return true
}