function Navbar(){
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#103f45" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand m-0 p-0" href="https://cssocietyusm.com/">
            <div className="p-2 d-flex align-items-center gap-4 ">
              <object data="logo/cs-soc-official.svg" type="image/svg+xml" title="CS Society Logo" height="64px" width="64px"></object>
              <div className="text-start fw-bold text-white fs-6 font-logo">
                <div>USM COMPUTER</div>
                <div>SCIENCE SOCIETY</div>
              </div>
            </div>
          </a>
        

          {/* Toggle button for dropdown (hamburger) - Only visible on small screens */}
          <div className="dropdown d-lg-none">
          <button className="navbar-toggler" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i>
            
          </button>
            <ul className="dropdown-menu dropdown-menu-end fs-6" aria-labelledby="navbarDropdown" style={{ backgroundColor: "#18646c" }}>
              <li><a className="dropdown-item text-white" href="https://cssocietyusm.com/about/">About</a></li>
              <li><a className="dropdown-item text-white" href="https://cssocietyusm.com/events/">Events</a></li>
            </ul>
          </div>

          {/* Normal display - Only visible on large screens */}
          <div className="d-none d-lg-flex p-2 align-items-center gap-4 fs-6">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex gap-4 list-unstyled">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="https://cssocietyusm.com/about/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="https://cssocietyusm.com/events/">Events</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>
      
      <div className="py-3"></div>
    </>
    
    
  );
}

export default Navbar;