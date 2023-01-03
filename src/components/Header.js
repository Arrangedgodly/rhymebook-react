import logo from '../images/rhymebook_logo.webp';

function Header() {
  return (
    <header className="header">
      <img 
        className='header-logo' 
        src={logo}
      />
      <h1 className="header-title">Rhymebook: The API Powered Notes App</h1>
    </header>
  );
}

export default Header;