import './Header.css';
const navItems = ['Odkrywaj', 'Moje podróże'];

function Header() {
  return (
    <header className="header">

      <a className="header-left" href="#">
        <h1 className="logo">TravelPlanner</h1>
        <img className="logo-icon" src="header-icon.svg" alt="Logo" />
      </a>
      <div className="header-right">
        <nav className="main-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
              
            ))}
            <li>
              <a href="#" className="main-nav__login">Zaloguj się</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;