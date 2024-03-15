import { Link, useNavigate } from "react-router-dom"

function Navbar(props) {
    var searchtext
    var navigate = useNavigate()
    function handleSearchtext(e){
        searchtext = e.target.value
    }

    function searchData(){
      var url = "/search?q="+searchtext
      navigate(url)
    }
    return (
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <form class="d-flex" role="search">
                            <input onChange={handleSearchtext} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" onClick={searchData} type="button">Search</button>
                        </form>
                    </ul>
                    <div class="d-flex" role="search">
                       {!props.isloggedin && <Link to="/login"> <button class="btn btn-success" >Login</button></Link>}
                       {props.isloggedin && <button className="btn btn-danger">Logout</button>}
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar