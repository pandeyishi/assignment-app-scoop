import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import BookList from './BookList';
import BookDetails from './BookDetail';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path = '/' component = {BookList} />
      <Route path = '/bookDetail/:id' component = {BookDetails} />
    </div>
  </Router>,
  document.getElementById('root')
);

