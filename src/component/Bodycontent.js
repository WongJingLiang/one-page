import { Link } from "react-router-dom";

const Bodycontent = () => {
    return (
        <div className="bodycontent">
            <h3>Here at HelloKopi, we strive to provide a relaxing and comfy space for all of you so that you can have a good time.</h3>
            <Link to="/about">
                <button type="button">Find out more!</button>
            </Link>
        </div>
    );
}
 
export default Bodycontent;