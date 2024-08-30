function Footer(){
  return(
    <>
      <footer>
        <div className="logo-background p-5">
          <div className="container px-3 text-start">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">

              {/* Column 1 - CSS logo */}
              <div className="col">            
                <a href="https://cssocietyusm.com/" target="_blank">
                  <img src="../src/assets/logo/cs-soc-official.svg" alt="USM CS Society Logo" className="img-fluid css-logo-img" />
                </a>         
              </div>

              {/* Column 2 - Navigate */}
              <div className="col">
                
                <h6 className="text-light-emphasis mb-3">NAVIGATE</h6>
                    <ul className="list-unstyled">
                        <li><a href="https://cssocietyusm.com/about/" className="text-body-emphasis navigate-body">About us</a></li>
                        <li><a href="https://cssocietyusm.com/events/" className="text-body-emphasis navigate-body">Events</a></li>
                        <li><a href="https://cssocietyusm.com/news" className="text-body-emphasis  navigate-body">News</a></li>
                    </ul>
                
              </div>

              {/* Column 3 - Social  */}
              <div className="col">
                <h6 className="text-light-emphasis mb-3">SOCIAL</h6>
                <div className="d-grid gap-3 d-flex">
                  <a href="https://www.facebook.com/cs.usm.my/" target="_blank">
                    <i className="fab fa-facebook-f text-success-emphasis fs-4 social-icon"></i>
                  </a>
                  <a href="https://www.instagram.com/cs.usm/" target="_blank">
                    <i className="fab fa-instagram text-success-emphasis fs-4 social-icon"></i>
                  </a>
                  <a href="https://tiktok.com/@cs.usm" target="_blank">
                    <i className="fab fa-tiktok text-success-emphasis fs-4 social-icon"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/cssocietyusm/" target="_blank">
                    <i className="fab fa-linkedin-in text-success-emphasis fs-4 social-icon"></i>
                  </a>
                  <a href="https://t.me/+zA4GF8CVVFpjOWY1" target="_blank">
                    <i className="fab fa-telegram-plane text-success-emphasis fs-4 social-icon"></i>
                  </a>
                </div>
              </div>

              {/* Column 4 - USM logo */}
              <div className="col">
                <a href="https://cs.usm.my/" target="_blank">
                  <img src="../src/assets/logo/CS-logo-transparent.svg" alt="USM CS School Logo" className="img-fluid cs-logo-img mb-3" />
                </a>
                <a href="https://usm.my/" target="_blank">
                  <img src="../src/assets/logo/USM-color.svg" alt="USM Logo" className="img-fluid usm-color-img" />
                </a>
              </div>

            </div>
          </div>
        </div>
        <div className="text-center py-3 copyright-background">
          <p className="small m-0">© 2022 - 2023 Computer Science Society, Universiti Sains Malaysia</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;