import React from 'react';
import { CarousalComponent } from '../carousal';
import { Header } from '../header';
import { Footer } from '../footer';

import { Outlet } from 'react-router-dom';

export const PageLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <CarousalComponent />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
