import { Link } from "react-router-dom"

export default function Mobile(props) {
    var mobile = props.data
    return (
        <div class="card" style={{"width": "18rem"}}>
           <Link to={"/details/"+mobile.mobileId}> <img src={mobile.image} class="card-img-top" alt="..." /></Link>
                <div class="card-body">
                    <h4 class="card-title">{mobile.brand}</h4>
                    <h5 class="card-title">{mobile.model}</h5>
                    <p class="card-text">{mobile.price}</p>
                    <p class="card-text">{mobile.releaseDate}</p>
                   
                </div>
        </div>
    )
}