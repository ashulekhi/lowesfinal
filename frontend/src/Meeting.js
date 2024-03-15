import { Component } from "react";

export default class Meeting extends Component{
    constructor(){
        super()
        this.state = {
            users:0
        }
    }

    joinMeeting(){
        this.setState({
            users : this.state.users+1
        })
    }

    render(){
        return (
            <div>
                <h1>Online Users :{this.state.users}</h1>
                <button onClick={this.joinMeeting.bind(this)}>jojn Meeting</button>
            </div>
        )
    }
}