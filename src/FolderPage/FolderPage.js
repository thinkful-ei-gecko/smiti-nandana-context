import React from "react";
import './FolderPage.css';
import StoreContext from '../StoreContext';



export default class FolderPage extends React.Component{
  static contextType = StoreContext;

  render(){
    const store = this.context.store;
 
 //console.log(props.match.params.id);
  const filternoteid = store.notes.filter((note) => {
    return note.folderId === this.props.match.params.id
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
      <button onClick={e => this.props.history.push("/")}>Back</button>
    </div>

  );
}
}