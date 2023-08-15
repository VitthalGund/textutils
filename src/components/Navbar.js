import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} >
        <div className="container navbar-brand nav-justified">
          <a className="navbar-brand" href="vitthalgund.github.io/textutils/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-left mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="vitthalgund.github.io/textutils/">Home</a>
              </li>
              <li className="nav-item">
                <Link to="https://github.com/VitthalGund"><i class="bi bi-github"></i></Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" href="/about">{props.aboutTitle}</a>
              </li> */}
            </ul>
            <div className={`form-check form-switch my-2 mx-2 text-${props.mode === "light" ? "#042743" : "light"}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            <div className={`form-check form-switch my-2 mx-1 text-${props.mode === "light" ? "#042743" : "light"}`}>
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Light Mode</label>
            </div>
            Custom Color
            <div className={`form-check form-switch my-2 mx-1 text-${props.mode === "light" ? "#042743" : "light"}`}>
              <input type="color" className="m-auto form-control form-control-color" id="color" value={props.color === null ? "black" : props.color} onChange={(e) => props.setColor(e.target.value)} />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
Navbar.propType = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string
}

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutTitle: "About"
}
