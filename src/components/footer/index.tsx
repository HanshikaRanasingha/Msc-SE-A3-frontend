import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{ backgroundImage: 'linear-gradient(#ff1493, purple)' }}
      className="contrast-footer footer-dark footer-shadow-dark p-5"
    >
      <div className="container d-flex flex-column">
        <div className="row">
          <div className="col-md-3">
            <p>
              <div className=" d-flex ">
                <h2 style={{ fontWeight: 'bold' }} className="d-inline font-weight-bold text-uppercase me-1">
                  IT MAGAZINE
                </h2>
              </div>
              <br />
              <a href="mailto:itmagazine@gmail.com" className="text-primary font-bold mb-2">
                Click to contact us at IT Magazine
              </a>
              <div className="d-flex flex-column">
                <span className="d-flex align-items-center my-1">
                  <span className=" me-2 bg-success" style={{ borderRadius: '10px', width: '10px', height: '10px' }} />
                  <span className="text-light">0705555555</span>
                </span>
                <span className="d-flex align-items-center">
                  <span className=" me-2 bg-success" style={{ borderRadius: '10px', width: '10px', height: '10px' }} />
                  <span className="text-light">0705050505</span>
                </span>
              </div>
              <br />
              <p className="text-light">Colombo, Sri Lanka</p>
            </p>
          </div>
          <div className="col-md-9">
            <div className="d-flex flex-row">
              <div>
                <a href={'https://web.facebook.com/'}>
                  <FacebookIcon sx={{ color: '#ffd1dc', paddingRight: '8px' }} />
                </a>
                <a href={'https://www.instagram.com/'}>
                  <InstagramIcon sx={{ color: '#ffd1dc', paddingRight: '8px' }} />
                </a>
                <a href={'https://www.linkedin.com/'}>
                  <LinkedInIcon sx={{ color: '#ffd1dc', paddingRight: '8px' }} />
                </a>
                <a href={'https://twitter.com/'}>
                  <TwitterIcon sx={{ color: '#ffd1dc', paddingRight: '8px' }} />
                </a>
              </div>
            </div>
            <div className="d-flex flex-row mt-4">
              <div style={{ marginLeft: '150px' }}>
                <h4 className="text-light font-bold mb-2">Services</h4>
                <p className="text-light">cPanel Hosting</p>
                <p className="text-light">VPS Hosting</p>
                <p className="text-light">Dedicated Servers</p>
                <p className="text-light">Cloud Hosting</p>
                <p className="text-light">Reseller Hosting</p>
              </div>
              <div>
                <h4 className="text-light font-bold mb-2">Company</h4>
                <p className="text-light">About Us</p>
                <p className="text-light">Contact Us</p>
                <p className="text-light">Client Area</p>
                <p className="text-light">Data Center</p>
                <p className="text-light">Site Map</p>
              </div>
              <div style={{ marginLeft: '150px' }}>
                <h4 className="text-light font-bold mb-2">Resouces</h4>
                <p className="text-light">Web Hosting Blogs</p>
                <p className="text-light">Knowledge Base</p>
              </div>
            </div>
          </div>
          <small className="text-center mt-5 footer-copyright">&copy; IT Magazine, 2023. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};
