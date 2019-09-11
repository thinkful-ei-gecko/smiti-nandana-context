import React from 'react';
import './App.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import NotePage from './NotePage/NotePage';
import FolderPage from './FolderPage/FolderPage';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MainPage />
      <FolderPage />
      <NotePage />      
        
    </div>
  );
}

export default App;
