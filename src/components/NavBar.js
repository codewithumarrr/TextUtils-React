import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.toggleMode} bg-${props.toggleMode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
          {/* </form> */}

          <div className="d-flex">
            <div className="bg-primary rounded mx-1" onClick={()=> ColorPallete('primary') } style={{height:"27px",width:"27px",cursor:"pointer"}}></div>
            <div className="bg-success rounded mx-1" onClick={()=> ColorPallete('success') } style={{height:"27px",width:"27px",cursor:"pointer"}}></div>
            <div className="bg-danger rounded  mx-1" onClick={()=> ColorPallete('danger') } style={{height:"27px",width:"27px",cursor:"pointer"}}></div>
            <div className="bg-info rounded    mx-1" onClick={()=> ColorPallete('info') } style={{height:"27px",width:"27px",cursor:"pointer"}}></div>
          </div>
          
          <div style={{float:"right"}}
            className={`form-check form-switch text-${
              props.toggleMode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMethod} 
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />

            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable DarkMode
            </label>




           
            
          </div>
        </div>
      </div>
    </nav>
  );

  function ColorPallete(value){
    removeClass(value);
    document.body.setAttribute("class","bg-"+value);
    if(props.toggleMode == 'dark'){
      removeClass(value);
    }
  }
}
function removeClass(value){
  document.body.removeAttribute("class","bg-"+{value});
  document.body.removeAttribute("class","bg-"+{value});
  document.body.removeAttribute("class","bg-"+{value});
  document.body.removeAttribute("class","bg-"+{value});
}

export default Navbar;
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title Here",
  aboutText: "About Text Here",
};
