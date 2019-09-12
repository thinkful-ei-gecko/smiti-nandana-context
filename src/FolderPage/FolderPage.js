import React from "react";
import './FolderPage.css';



export default function FolderPage(props){
 console.log(props.match.params.id);
  const filternoteid = props.store.notes.filter((note) => {
    return note.folderId === props.match.params.id
  } );
  const folderList = filternoteid.map(note => {
    return(
      
        <li  className= "sidebar" key={note.id}>
          <h4>{note.name}</h4>
        </li>
      
    )
  })

  return(
    <div className ="FolderPage">
      {folderList}
      <button onClick={e => props.history.push("/")}>Back</button>
    </div>

  );
}