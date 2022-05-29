

//Impot the link to react router do 
import { hover } from '@testing-library/user-event/dist/hover'
import { Link } from 'react-router-dom'


function Header(props) {
    //Inline CSS

    const navStyle = {
        display: "flex",
        fontfamily:"Times New Roman",
        justifyContent: "space-evenly",
        textalign: "right",
        padding: "10px",
        width: "20%",
        marginright: "60px",
        margintop: "20px",
        hover:"blue"
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