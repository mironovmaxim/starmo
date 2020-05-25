import React from 'react';
import Header from '../header';
import Main from '../main';
import About from '../about';
import Contact from '../contact';
import CatalogPage from '../pages';
import CardItem from '../card-item';
import NotPage from '../not-page';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './app.css';


function App() {
  return(
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <main>
        <Switch>
          <Route exact path = '/' component = {Main}/>
          <Route path = '/about' component = {About} />
          <Route path = '/contact' component = {Contact} />
          <Route exact path = '/catalog' component = {CatalogPage} />
          <Route path = '/catalog/:id'
                render = {({match}) => {
                  const { id } = match.params;
                  return <CardItem itemId = {id}/>
                } }/>
          <Route component = {NotPage}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;