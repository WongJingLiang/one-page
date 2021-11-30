import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <a className="logo" href="/">
                <span className="material-icons" >lightbulb</span>
                <h1>HelloKopi</h1>
            </a>
                      
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;