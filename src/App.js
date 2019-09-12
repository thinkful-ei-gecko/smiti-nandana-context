import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DUMMYSTORE from './dummystore'
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import NotePage from './NotePage/NotePage';
import FolderPage from './FolderPage/FolderPage';

class App extends React.Component {
state = {
  store: DUMMYSTORE
}


  render(){
  console.log(this.state.store.folders)

  return (
    <BrowserRouter>
      <div className="App">
      
      <Header />
      <NavBar store={this.state.store} />
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} store={this.state.store} />}/>
        <Route path="/FolderPage/:id" render={(props) => <FolderPage {...props} store={this.state.store}/>}/>
        <Route path="/notePage" component={NotePage} />   
        <Route render={() => <h2>Page Not Found</h2>}/>

      </Switch>
                    
      </div>   
    </BrowserRouter>
  
  );
  }
}

export default App;
