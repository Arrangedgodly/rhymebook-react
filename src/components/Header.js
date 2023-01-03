import logo from '../images/rhymebook_logo.webp';

function Header({ loggedIn, currentUser }) {
  return (
    <header className="header">
      <img 
        className='header-logo' 
        src={logo}
      />
      <h1 className="header-title">Rhymebook: The API Powered Notes App</h1>
      {loggedIn && (
        <div className='header-user'>
          <img
            className='header-user_image'
            src={currentUser.avatar}
          />
          <p
            className='header-user_name'
          >
            {currentUser.name}
          </p>
        </div>
      )}
    </header>
  );
}

export default Header;