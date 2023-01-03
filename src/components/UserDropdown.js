import Dropdown from 'react-bootstrap/Dropdown';

function UserDropdown({ currentUser }) {
    return (
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className='header-user'>
            <img
              className='header-user_image'
              src={currentUser.avatar}
            />
            <p
              className='header-user_name'
            >
              {currentUser.name}
            </p>
          </Dropdown.Toggle>

          <Dropdown.Menu  variant='dark'>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    );
}

export default UserDropdown;