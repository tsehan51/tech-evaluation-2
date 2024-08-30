function EventCard(){
  return(
    <>
      <div className="px-4 cards-body-width container">

        {/* Body title */}
        <div>
          <h1 className="fw-bold fs-2 text-nowrap d-inline border-custom">All Events</h1>
        </div>
        
        <br/>
        <div className="row row-cols-1 row-cols-md-3 g-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/lon-2024-poster.webp" className="card-img-top" alt="Log Off Night 2024 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/lon-2024/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/lon-2024">Log Off Night 2024</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-07-07">July 7 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">An annual dinner to celebrate and appreciate final year computer science students&#39; contributions.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">USM Students</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Prom Night</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/pixel-2024-poster.webp" className="card-img-top" alt="PIXEL 2024 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/pixel-2024/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/pixel-2024">Project Innovation &amp;eXploration in CS Education and Learning 2024</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-07-02">July 2 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">An annual flagship exhibition programme specially curated for final year computer science students.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">Year 4</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Flagship</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/agm-2024-poster.webp" className="card-img-top" alt="Annual General Meeting 2024 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/agm-2024/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/agm-2024">Annual General Meeting 2024</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-06-26">June 26 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">An annual event to showcase the achievements of CS Society throughout the year and elect the new executives members.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">CS Students</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">CS Society</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/vhack-2024-poster.webp" className="card-img-top vhack-img" alt="Varsity Hackathon 2024 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/vhack-2024/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/vhack-2024">Varsity Hackathon 2024</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-04-20">Apr 20 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">A completely redesigned international hackathon and a space for university students to gain new hackathon experience.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">International</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Flagship</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/sukapps-2024-poster.webp" className="card-img-top" alt="Sukan Antara Pusat Pengajian Sains 2024 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/sukapps-2024/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/sukapps-2024">Sukan Antara Pusat Pengajian Sains 2024</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-04-09">Apr 9 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">A joint collaboration sports competition between seven competing Science Schools in USM.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">Science Schools</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Sports</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/frostynight-2023-poster.webp" className="card-img-top" alt="Frosty Fantasy Night 2023 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/frostynight-2023/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/frostynight-2023">Frosty Fantasy Night 2023</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-04-04">Apr 4 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">A brand new event specifically designed for computer science undergraduates to unwind and relax.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">CS Students</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Entertaiment</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/me2-2024-poster.webp" className="card-img-top" alt="Major Minor Exploration Event 2024 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/me2-2024/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/me2-2024">Major Minor Exploration Event 2024</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2024-03-05">Mar 5 2024</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">A 2-day virtual event aimed at helping first-year USM CS students to select their academic tracks.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">Year 1</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Talk</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/vcsirf-2023-poster.webp" className="card-img-top" alt="Virtual Computer Science Internship &#38; Recruitment Fair 2023 image"/>
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/vcsirf-2023/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/vcsirf-2023">Virtual Computer Science Internship &amp;Recruitment Fair 2023</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2023-12-04">Dec 4 2023</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">A 1-day online event featuring career talks and sharing sessions primarily for computer science students at USM.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">Year 3 &amp; 4</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Flagship</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Card 9 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
            <div className="card h-100 position-relative shadow-sm d-flex flex-column">
                <div className="position-relative">
                    <img src="../src/assets/events/csbersamamu-2023-poster.webp" className="card-img-top" alt="CS Bersamamu 2023 image" />
                    <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center w-100 h-100">
                      <a href="https://cssocietyusm.com/events/2023-2024/csbersamamu-2023/">
                        <button type="button" className="btn btn-success see-more-btn">See more</button>
                      </a>
                    </div>
                </div>
                <div className="card-body d-flex flex-column px-4">
                    <h5 className="card-title mb-3">
                      <a href="https://cssocietyusm.com/events/csbersamamu-2023">CS Bersamamu 2023</a>
                    </h5>
                    <div className="small d-flex align-items-center gap-2 pb-2 mb-3 border-date">
                        <i className="bi bi-calendar d-flex align-items-center" style={{ fontSize: '1.2rem', lineHeight: '1.2' }}></i>
                        <time dateTime="2023-10-22">Oct 22 2023</time>
                    </div>
                    <p className="card-text mb-3 flex-grow-1">An annual event that is organized to welcome and guide first-year students from School of Computer Sciences, USM.</p>
                    <div className="d-inline-flex align-items-center gap-2">
                        <span className="badge rounded-pill text-bg-success py-2 px-3">Year 1</span>
                        <span className="badge rounded-pill text-bg-warning py-2 px-3">Flagship</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation example">
          <div className="d-flex justify-content-center py-4">
            <ul className="pagination shadow">
              <li className="page-item"><a className="page-link bg-success text-white" href="#">1</a></li>
              <li className="page-item"><a className="page-link text-success" href="https://cssocietyusm.com/events/2/">2</a></li>
              <li className="page-item">
                <a className="page-link text-success" href="https://cssocietyusm.com/events/2/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
    </>
  );
}

export default EventCard;