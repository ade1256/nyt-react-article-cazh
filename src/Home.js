import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './css/style.css';
import MenuNavbar from './partials/MenuNavbar';
import ArticleSearch from './partials/ArticleSearch';

class Home extends Component {

  
  render() {
    return (
      <Router>
      <div>
        <MenuNavbar/>
        <Switch>
          <Route exact path='/' render={
            props =>
            <div>
              <ArticleSearch />
            </div>
            } />
          <Route exact path='/search' component={ArticleSearch} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default Home;
