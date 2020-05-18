import React from 'react';

import { Logo, UserBlock, CustomButton } from '../../components';

import './header.css';

const Header = props => (
  <header className="header">
    <div className="header__container">
      <Logo logoSrc="/images/logo.png" />
      {/* <UserBlock avatar={""} name={'UserName'}>
        <CustomButton text="Logout" large onClick={() => console.log('logout')} />
      </UserBlock> */}
    </div>
  </header>
);

export default Header;