import React, { useState } from 'react';
import { UserInfoDropdown } from '../';
import './user-block.css';

const UserBlock = ({ avatar, name, children }) => {
  const [isInfoHidden, setInfoHidden] = useState(true);
  return (
    <div className={`user-block ${!isInfoHidden && 'info-hidden'}`}>
      <div className="user-block__inner">
        <div
          className="user-info"
          onClick={() => setInfoHidden(!isInfoHidden)}
        >
          <div className="user-info__avatar">{avatar}</div>
          <div className="user-info__name">{name}</div>
        </div>
        <UserInfoDropdown isHidden={isInfoHidden} />
        {children}
      </div>
    </div>
  )
}

export default UserBlock;