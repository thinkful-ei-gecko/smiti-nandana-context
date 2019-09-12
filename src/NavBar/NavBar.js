import React from "react";
import {Link} from "react-router-dom";



export default function NavBar(props){

  const folderList = props.store.folders.map(folder => {
    return(
      
        <li  className= "sidebar" key={folder.id}>
          <Link to={`/folderPage/${folder.id}`}><h4>{folder.name}</h4></Link>
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