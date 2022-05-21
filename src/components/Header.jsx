

//Impot the link to react router do 
import { Link } from 'react-router-dom'


function Header(props) {
    //Inline CSS

    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto"
    }
//Page title
//Creating links to the pages in a navigation bar
    return (
        <header>
            
       <h1>My portfolio page</h1> 
        <nav style={navStyle}> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to= "/projects">Projects</Link>
        </nav>
        </header>
    )
} 

export default Header