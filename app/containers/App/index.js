/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ContactPage from 'containers/ContactPage/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import MenuPage from 'containers/MenuPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/menu" component={MenuPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
