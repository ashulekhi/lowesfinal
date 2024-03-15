import { useSearchParams } from "react-router-dom"

function Search(){
    var [querystring,setQueryString] = useSearchParams()
    var searchtext = querystring.get("q")
    return (
        <div>
            <h1>Search items for {searchtext}</h1>
        </div>
    )
}

export default Search