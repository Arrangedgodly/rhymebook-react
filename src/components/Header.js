import logo from '../images/rhymebook_logo.webp';
import UserDropdown from './UserDropdown';

function Header({ loggedIn, currentUser }) {
  return (
    <header className="header">
      <img 
        className='header-logo' 
        src={logo}
      />
      <h1 className="header-title">Rhymebook: The API Powered Notes App</h1>
      {loggedIn && (
        <UserDropdown 
          currentUser={currentUser}
        />
      )}
    </header>
  );
}

export default Header;