//--------This is for Header--------
import "./Header.css";

//onClick= is for scroll back to header when you click the Header
const Header = () => {
                        return (
                            <span onClick={ () => window.scroll(0,0) } className="header">The Best Movie Hub</span>
                               )    
                     };

export default Header; 