import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { UploadPage } from '../pages/UploadPage';
import { PageLayout } from '../components/pageLayout';

const AppsContainer = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path={'/upload/:type'} element={<UploadPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppsContainer;
