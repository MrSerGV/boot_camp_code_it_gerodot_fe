import React from 'react';
import './user-info-dropdown.css';

const UserInfoDropdown = ({ isHidden }) => {

  return (
    <div
      className="user-info-dropdown"
      style={{ display: isHidden ? 'none' : 'block' }}
    >
      <div className="user-info-dropdown__row">
        Name: <span>Name Surname</span>
      </div>
      <div className="user-info-dropdown__row">
        Email: <span>email@gmail.com</span>
      </div>

    </div>
  )
}

export default UserInfoDropdown;