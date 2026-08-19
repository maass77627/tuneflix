import {NavLink} from "react-router-dom";

function NavBar() {





  return (
    <nav className="navbar">
     
    <div class="link-wrap">
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/songs">
        Songs
      </NavLink>

      <NavLink to="/artists">
        Artists
      </NavLink>

      <NavLink to="/albums">
        Albums
      </NavLink>

      <NavLink to="/profile">
        Profile
      </NavLink>
</div>

 <h1>NetTunes</h1>

    </nav>
  );
}



export default NavBar