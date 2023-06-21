import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from './assets/mushu-logo-2.jpg'
import './App.scss'
import { useEffect } from 'react';

function App() {

  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <div>
        <img src={Logo} className='logo' alt="logo" />

      </div>
      <div id="navigation">
        <nav>
          <ul>
            <li className={location.pathname === '/' ? 'nav-active' : ''}>
              <Link to={`/`}>Home</Link>
            </li>
            <li className={location.pathname === '/book' ? 'nav-active' : ''}>
              <Link to={`/book`}>Book an appointment</Link>
            </li>
            <li className={location.pathname === '/cancellation-policy' ? 'nav-active' : ''}>
              <Link to={`/cancellation-policy`}>Cancellation Policy</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'nav-active' : ''}>
              <Link to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="body">
        <Outlet />
      </div>
      <div id="footer">
        <div className="footer-map">
          <iframe width="450"
            height="300"
            loading="lazy"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrRCsqXdTBogRWVw47H2L-IQ&key=AIzaSyDQWlUSBOjihDV_JYEFhf4iulvscq1pkHQ">
          </iframe>
        </div>
        <div className="footer-contact">
          <h2>We're open 7 days a week (hours vary)</h2>
          <h2><Link to={`/contact`}>Contact</Link></h2>
          <h2>(608) 123-9765</h2>
          <h2>104 Willy St</h2>
          <h2>Madison, WI 53714</h2></div>
      </div>
    </>
  );
}

export default App
