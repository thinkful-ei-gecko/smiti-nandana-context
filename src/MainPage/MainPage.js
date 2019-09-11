import React from "react";
import './MainPage.css';

export default function MainPage(props){

  const mainList = props.store.notes.map(note => {
    return(
      <li className="mainpage" key={note.id}>
        <h4>{note.name}</h4>
        <p>Date modified on {Date(note.modified)}</p>
      </li>
    )
  })

console.log(props.store)

  return(
    
    <div className ="MainPage">
      {mainList}
    </div>

  );
}