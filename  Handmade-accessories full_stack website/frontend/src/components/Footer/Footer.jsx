import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h2>Zemuni</h2>
          <p>
            Handmade accessories, created with love
            and made just for you.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/">Custom order</Link></li>
            <li><Link to="/">contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>Email: zemuni@gmail.com</p>
          <p>Ethiopia</p>
        </div>
      </div>

      <div>
        <p>
          © {new Date().getFullYear()} Zemuni.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;