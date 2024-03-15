import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Login(props) {
    var user = {}
    var totalusers = []
    var [onlineUsers,setOnlineusers] =  useState(0)
    console.log("People jpined" , onlineUsers)
    function joinMeeting(){
        setOnlineusers(onlineUsers+1)
    }

    // useEffect(()=>{
    //     alert("Component Rendered")


    //     return function(){
    //         alert("You are leaving this screen")
    //     }
    // },[])

    function handleEmail(event){
        user.email = event.target.value
    }

    function handlePassword(event){
        user.password = event.target.value
    }

    function handleLogin(){
        console.log("User details" , user)
        axios({
            url:"http://localhost:5000/loginaccount",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("response from login api", response)
            if(response.headers.authorization){
                props.loginDone()
            }
        }, (error)=>{
            console.log("error from login api", error)
        })


    }

    return (
        <section class="vh-100" style={{"background-color": "#eee"}}>
        <div class="h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{"border-radius": "25px"}}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Here</p>
      
                      <form class="mx-1 mx-md-4">
      
                    
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input onChange={handleEmail} type="email" id="form3Example3c" class="form-control" />
                            <label class="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input onChange={handlePassword} type="password" id="form3Example4c" class="form-control" />
                            <label class="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>
                        <div>
                            <Link style={{float:"right"}} to="/register">New user? Create An Account</Link>
                            <Link  to="/forgot">Forgot Password?</Link>
                        </div>
                        <div className="mt-3">
                          <button onClick={handleLogin} style={{"float":"right"}} type="button" class="btn btn-primary btn-lg">Register</button>
                        </div>
                        
      
                      </form>
      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image" />
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Login