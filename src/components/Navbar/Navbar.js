import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navbar__item"><a href="/" className='link link--nav'>Projects</a></li>
        <li className="navbar__item"><a href="/" className='link link--nav'>Skills</a></li>
        <li className="navbar__item"><a href="/" className='link link--nav'>Contact</a></li>
        <a href="/">
            <span type='button' className='btn btn--primary'>
              Resume
            </span>
          </a>
      </ul>
    </nav>
  )
}

export default Navbar