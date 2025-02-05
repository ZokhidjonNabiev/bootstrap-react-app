import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="sticky-top shadow">
        <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand h1 fs-4" href="#">Company</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="text-center mt-5 ps-3 pe-3">
          <h2 className="display-3">Pricing</h2>
          <p className="lead mt-3">Quickly build an effective pricing table for your potential customers with this <br /> 
          Bootstrap example. It's built with default Bootstrap components and utilities with <br /> little customization.</p>

          <div className="container mt-5 card-block border-bottom">
            <div className="row">
             <div className="col">
             <div class="card text-center">
                <div className="card-header fs-3">Free</div>
                <div class="card-body">
                  <h5 class="card-title">$0<span className=""> / mo</span></h5>
                  <p class="card-text text-center mt-3">
                      <span>10 users included</span>
                      <span>2 GB of storage</span>
                      <span> Email support</span>
                      <span>Help center access</span>
                  </p>
                  <button class="btn btn-outline-primary btn-lg" type="button">Sign up for free</button>
                </div>
              </div>
             </div>

             <div className="col">
             <div class="card text-center">
                <div className="card-header fs-3">Pro</div>
                <div class="card-body">
                  <h5 class="card-title">$15<span className=""> / mo</span></h5>
                  <p class="card-text text-center mt-3">
                      <span>20 users included</span>
                      <span>10 GB of storage</span>
                      <span> Priority email support</span>
                      <span>Help center access</span>
                  </p>
                  <button class="btn btn-primary btn-lg" type="button">Sign up for free</button>
                </div>
              </div>
             </div>

             <div className="col">
             <div class="card text-center">
                <div className="card-header fs-3">Enterprise</div>
                <div class="card-body">
                  <h5 class="card-title">$29<span className=""> / mo</span></h5>
                  <p class="card-text text-center mt-3">
                      <span>30 users included</span>
                      <span>15 GB of storage</span>
                      <span> Phone and email support</span>
                      <span>Help center access</span>
                  </p>
                  <button class="btn btn-primary btn-lg" type="button">Sign up for free</button>
                </div>
              </div>
             </div>
            </div>
          </div>

      </section>

      <footer className='mt-5'>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-4 col-md">
              <img className='mb-3' src={logo} alt="logo" />
              <small className='d-block ms-3 text-muted'>© 2017-2018</small>
            </div>

            <div className="col-6 col-sm-4 col-md">
              <h4>Features</h4>

              <ul className='list-unstyled'>
                  <li>
                    <a href="#">Cootuff</a>
                  </li>
                  <li>
                    <a href="#">Random feature</a>
                  </li>
                  <li>
                    <a href="#">Random feature</a>
                  </li>
                  <li>
                    <a href="#">Team feature</a>
                  </li>
                  <li>
                    <a href="#">Stuff for developers</a>
                  </li>
                  <li>
                    <a href="#">Another one</a>
                  </li>
                  <li>
                    <a href="#">Last time</a>
                  </li>
              </ul>
            </div>

            <div className="col-6 col-sm-4 col-md">
              <h4>Resources</h4>

              <ul className='list-unstyled'>
                  <li>
                    <a href="#">Resource</a>
                  </li>
                  <li>
                    <a href="#">Resource name</a>
                  </li>
                  <li>
                    <a href="#">Another resource</a>
                  </li>
                  <li>
                    <a href="#">Final resource</a>
                  </li>
              </ul>
            </div>

            <div className="col-6 col-sm-4 col-md">
              <h4>Resources</h4>

              <ul className='list-unstyled'>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Locations</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
