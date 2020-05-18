import React from 'react';
import { GoogleMap } from '../../components';
import './map-layout.css';

const MapLayout = () => { 
  return (
  <div className="side left-side">
    <div className="side__inner">
      <GoogleMap/>
    </div>
  </div>
  )
};
export default MapLayout;