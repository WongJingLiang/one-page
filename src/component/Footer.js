import { Link } from "react-router-dom";

const Footer = () => {
    return (  
       <div className="footerspace">
           <div className="footer">
                <dl>
                    <dt>About us</dt>
                    <dd><Link to="/about">Our Company</Link></dd>
                    <dd><Link to="/history">Our History</Link></dd>
                    <dd><Link to="/">HelloKopi Malaysia</Link></dd>
                </dl>
           </div>
       </div>
    );
}
 
export default Footer;