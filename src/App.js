import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DUMMYSTORE from './dummystore'
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import NotePage from './NotePage/NotePage';
import FolderPage from './FolderPage/FolderPage';
import StoreContext from './StoreContext';

class App extends React.Component {
state = {
  store: DUMMYSTORE
}


  render(){
  console.log(this.state.store.folders)

  return (
    <StoreContext.Provider value={{
      store:this.state.store
    }}>
    <div className="App">
      <Header />
      <NavBar store={this.state.store} />
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props}  />}/>
        <Route path="/FolderPage/:id" render={(props) => <FolderPage {...props} />}/>
        <Route path="/notePage" component={NotePage} />   
        <Route render={() => <h2>Page Not Found</h2>}/>

      </Switch>
                    
      </div>   
    
      </StoreContext.Provider>
  );
  }
}

export default App;
