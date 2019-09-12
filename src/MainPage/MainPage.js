import React from "react";
import './MainPage.css';
import StoreContext from '../StoreContext';

export default class MainPage extends React.Component{
  static contextType = StoreContext;
  render(){
    const store = this.context.store
  const mainList = store.notes.map(note => {
    return(
      <li className="mainpage" key={note.id}>
        <h4>{note.name}</h4>
        <p>Date modified on {Date(note.modified)}</p>
      </li>
    )
  })



  return(
    
    <div className ="MainPage">
      {mainList}
    </div>

  );
}
}