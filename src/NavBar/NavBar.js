import React from "react";



export default function NavBar(props){

  const folderList = props.store.folders.map(folder => {
    return(
      
        <li  className= "sidebar" key={folder.id}>
          <h4>{folder.name}</h4>
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