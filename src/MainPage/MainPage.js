import React from "react";
import './MainPage.css';
import StoreContext from '../StoreContext';

export default class MainPage extends React.Component{
  static contextType = StoreContext;

 

  render(){
    const store = this.context.store
    console.log(store);
  const mainList = store.notes.map(note => {
    return(
      <li className="mainpage" key={note.id}>
        <h4>{note.name}</h4>
        <p>Date modified on {Date(note.modified)}</p>
        <button className="remove" onClick={() => this.context.removeNote(note.id)}>Remove</button>
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