import React from "react";



export default function FolderPage(props){
  return(
    <div className ="FolderPage">
      <p>FolderPage</p>
      <button onClick={e => props.history.push("/")}>Back</button>
    </div>

  );
}