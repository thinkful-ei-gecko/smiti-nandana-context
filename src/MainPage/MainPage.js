import React from "react";

export default function MainPage(props){

  const mainList = props.store.notes.map(note => {
    return(
      <li key={note.id}>
        <p>{note.name}</p>
        <p>{Date(note.modified)}</p>
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