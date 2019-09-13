import React from 'react';
import './App.css';
import {Route, Switch } from "react-router-dom";
//import DUMMYSTORE from './dummystore'
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import NotePage from './NotePage/NotePage';
import FolderPage from './FolderPage/FolderPage';
import StoreContext from './StoreContext';

class App extends React.Component {
state = {
  store: {
    folders:[],
    notes:[],

  }
}

componentDidMount(){
  fetch("http://localhost:9090/db")
  .then(res => res.json())
  .then(response => this.setState({store: response}));
}

<<<<<<< HEAD
removeNote = (noteId) => {
  fetch(`http://localhost:9090/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
  },
}).then(res => {
  let store = this.state.store;
  store.notes = this.state.store.notes.filter(note=>note.id!==noteId);
  this.setState({store}); // store: store
});
};
=======
removeNotes = noteId => {
  const newNotes = this.state.notes.filter(note =>
    note.id !== noteId)
    this.setState({
      notes:newNotes
    })
}



>>>>>>> 5baadc54d442933975b1ad801ff29936ccef0bfa

  render(){
  console.log(this.state)

  return (
    <StoreContext.Provider value={{
      store:this.state.store,
<<<<<<< HEAD
      removeNote: this.removeNote
=======
      removeNotes:this.removeNotes
>>>>>>> 5baadc54d442933975b1ad801ff29936ccef0bfa
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
