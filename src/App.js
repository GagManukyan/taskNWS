import React, { useEffect } from 'react';
import SelectCategories from './selsectCategories/SelectCategories';
import './App.css';
import DisplayerPhotos from './displayerPhotos/DisplayerPhotos';



function App() {
  return (
    <div className="App">
        <SelectCategories/>
        <DisplayerPhotos/>
    </div>
  );
}

export default App;
