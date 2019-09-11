import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import NotePage from './NotePage/NotePage';
import FolderPage from './FolderPage/FolderPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/folderPage" component={FolderPage} />
        <Route path="/notePage" component={NotePage} />   
        <Route render={() => <h2>Page Not Found</h2>}/>

      </Switch>
                    
      </div>   
    </BrowserRouter>
    
  );
}

export default App;
