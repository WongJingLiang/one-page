import { Link } from "react-router-dom";

const Notfound = () => {
    return (  
        <div className="notfound">
            <h1>SORRY!</h1>
            <p>That page cannot be found</p>
            <Link to="/">Click here to go back to our homepage</Link>
        </div>
    );
}
 
export default Notfound;