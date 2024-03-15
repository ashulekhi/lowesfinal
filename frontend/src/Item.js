function Item(props){
    return (
        <div>
             <img src={props.data.image}></img>
             <h2>{props.data.name}</h2>
             <h4>{props.data.price}</h4>
            {props.data.tag &&  <h3>{props.data.tag}</h3>}
        </div>
    )
}
export default Item