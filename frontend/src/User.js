function User(props){
    var user = props.data
    return (
        <div className="card m-3" style={{"width":"18rem"}}>
            <img src="usericon.png" style={{height:"10rem"}}></img>
            <label><b>{user.email}</b></label>
        </div>
    )
}
export default User