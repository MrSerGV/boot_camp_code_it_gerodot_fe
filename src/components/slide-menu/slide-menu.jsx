import React, { useState } from 'react';
import { SlideButton } from '../';
import './slide-menu.css';

const SlideMenu = ({ children }) => {

  const [sideRef] = useState(React.createRef());
  const [hidden, setHidden] = useState(false);

  return (
    <div className="side right-side" ref={sideRef}
      style={{
        marginRight: hidden ? `-${+sideRef.current.offsetWidth - 45}px` : "0px"
      }}
    >
      <div className="side__inner side__inner-right">
        <div className="right-side__bg-image">
          <img src="/images/gerodot.png" alt="gerodot" />
        </div>
        <div className="right-side__content">
          <SlideButton
            hidden={hidden}
            color='yellow'
            size='large'
            onClick={() => setHidden(!hidden)}
          />
          {children}
        </div>
      </div>
    </div>
  );
}

export default SlideMenu;