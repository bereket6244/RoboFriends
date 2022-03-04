import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'


const Nav = () =>{
    return (
        <div className='sidenav'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">NUMP0</a>
  <div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Instruction</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Give Up</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
        </div>
    )
}

export default Nav