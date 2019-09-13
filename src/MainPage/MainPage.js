import React from "react";
import './MainPage.css';
import StoreContext from '../StoreContext';

export default class MainPage extends React.Component{
  static contextType = StoreContext;

<<<<<<< HEAD
 
=======
  fetchRemoveNotes= (noteId,rn) => {
  
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
    },
  })
  .then(res => res.json())
  .then(resJson => {rn(noteId)} )
};
>>>>>>> 5baadc54d442933975b1ad801ff29936ccef0bfa

  render(){
    const store = this.context.store
    console.log(store);
  const mainList = store.notes.map(note => {
    return(
      <li className="mainpage" key={note.id}>
        <h4>{note.name}</h4>
        <p>Date modified on {Date(note.modified)}</p>
<<<<<<< HEAD
        <button className="remove" onClick={() => this.context.removeNote(note.id)}>Remove</button>
=======
        <button className="remove" 
        onClick={() => fetchRemoveNotes(note.id,context.removeNotes)}>Remove</button>
>>>>>>> 5baadc54d442933975b1ad801ff29936ccef0bfa
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