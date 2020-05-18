import React from 'react';
import { Header, FormLayout, MapLayout } from '../../layouts';
import './home-page.css';

const HomePage = () => (
  <div className="home-page">
    <Header />
    <MapLayout />
    <FormLayout />
  </div>
);

export default HomePage;