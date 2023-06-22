

import React from 'react';
import NavBar from './components/NavBar/navbar';
import Banner from './components/Banner/Banner';
import './App.css';
import RowPost from './components/RowPost/RowPost';
import {originals,action,trending,comedy,romance,horror} from './urls';

function App() {
  return (
   <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Actions' isSmall />
    <RowPost url={trending} title='Trending' isSmall />
    <RowPost url={comedy} title='Comedy' isSmall />
    <RowPost url={romance} title='Romance' isSmall />
    <RowPost url={horror} title='Horror' isSmall />
   </div>
  );
}

export default App;
