import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Web & Devs</div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero" id="home">
        <h1>Leading Web Development Company</h1>
        <p>
          Our passionate and focused team builds customized web solutions to meet your business needs.
        </p>
        <button className="btn-primary">Get a Free Quote</button>
      </header>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>We build scalable and optimized web applications.</p>
          </div>
          <div className="card">
            <h3>Web Designing</h3>
            <p>Creative UI/UX designs tailored for your brand.</p>
          </div>
          <div className="card">
            <h3>Digital Marketing</h3>
            <p>SEO, social media, and campaigns to grow your reach.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          We are a team of dedicated professionals committed to delivering high-quality digital solutions.
        </p>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>2nd Floor, Plot No 8, Teacher’s Colony, Baba Market, Ajmer Road, Jaipur</p>
        <p>Email: sales@webndevs.com | Phone: +91-9887603015</p>
        <button className="btn-primary">Get in Touch</button>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Web & Devs IT Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
