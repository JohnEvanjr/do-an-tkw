import React from 'react'
import "../footer/footer.css"
export default function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="main-content">
        <div className="row">

          

          <div className="column">
            <h3 className="title">Company</h3>
            <ul className="list">
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Features</a>
              </li>
              <li>
                <a href="#!">Our Pricing</a>
              </li>
              <li>
                <a href="#!">Latest News</a>
              </li>
            </ul>
          </div>

          <div className="column">
            <h3 className="title">Support</h3>
            <ul className="list">
              <li>
                <a href="#!">FAQ’s</a>
              </li>
              <li>
                <a href="#!">Terms & Conditions</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="column">
            <h3 className="title">Address</h3>
            <ul className="list">
              <li>
                <a href="#!">
                  <strong>Location:</strong> quận Tân Phú, thành phố Hồ Chí Minh
                </a>
              </li>
              <li>
                <a href="#!"><strong>Email:</strong> email@gmail.com</a>
              </li>
              <li>
                <a href="#!"><strong>Phone:</strong> + 000 1234 567 890</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright ©2022 webdesign.gdn All rights reserved</p>
        </div>
      </div>
    </footer>

    </>
  );
}
