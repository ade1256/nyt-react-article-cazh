import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './css/style.css';
import MenuNavbar from './partials/MenuNavbar';
import ArticleNews from './partials/ArticleNews';
import ResultSearch from './partials/ResultSearch';
import ArticleSearch from './partials/ArticleSearch';
import DetailArticle from './partials/DetailArticle';
import Book from './partials/Book';
import BookResultSearch from './partials/BookResultSearch';


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
              <h3><center>Berita Terbaru</center></h3>
              <br/>
              <br/>
              <ArticleNews />
            </div>
            } />
          <Route exact path='/article/' component={ArticleSearch} />
          <Route exact path='/article/:search/:sort' component={ResultSearch} />
          <Route exact path='/article/:search' component={ResultSearch} />
          <Route exact path='/detail/:url' component={DetailArticle} />
          <Route exact path='/books' component={Book} />
          <Route exact path='/books/:category' component={BookResultSearch} />
     
        </Switch>
      </div>
    </Router>
  );
}
}

export default Home;
