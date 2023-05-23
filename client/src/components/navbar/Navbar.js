import "./navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">Tripify</span>
          </Link>
            <div classname="navItems">
                <button className="navButton"> Login </button>
                <button className="navButton"> signUp </button>
            </div>
        </div>

    </div>
  )
}

export default Navbar