import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Click</h1>
            <p></p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <Link href="https://play.google.com/store/games"><span>Google Play</span></Link>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <Link to="./Career"><li>Careers</li></Link>
              <Link to="./Store"><li>Our Stores</li></Link>
              <Link to="./Care"><li>Our Cares</li></Link>
              <Link to="./Terms"><li>Terms & Conditions</li></Link>
              <Link to="./Privacy"><li>Privacy Policy</li></Link>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>SLT mobitel, Lotus Road, Colombo 1.</li>
              <li>Email: click.help@gmail.com</li>
              <li>Phone: +94 3456 7894</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
