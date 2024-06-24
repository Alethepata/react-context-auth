import { NavLink } from "react-router-dom"

function Header(){
  return(
    <header>
      <nav>
        <menu>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/posts">Posts</NavLink></li>
        </menu>
      </nav>
    </header>
  )
}

export default Header