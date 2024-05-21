import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeView from '../View/HomeView';
import ProjectsView from '../View/ProjectsView';
import AboutView from '../View/AboutView';
import ContactView from '../View/ContactView';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/projects" element={<ProjectsView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/contact" element={<ContactView />} />
    </Routes>
  );
};

export default RoutesComponent;
