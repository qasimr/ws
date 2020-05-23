import React from "react";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>
              Menü</div>
            <ul className='nav-links'>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Footer</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Kontakt</li>
                <li>
                  <div exact>
                    <a href="mailto:halloqasim@raza.work?subject=Hallo! Mein Name ist (Ihr Name)">eMail</a>
                  </div>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Rechtliches</li>
                <li>
                  <NavLink to='/datenschutz' exact>
                    Datenschutz
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/impressum' exact>
                    Impressum
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="slide-container"></div>
      </div>
    </nav>
  );
};

export default Navigation;
