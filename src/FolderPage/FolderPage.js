import React from "react";
import './FolderPage.css';
import StoreContext from '../StoreContext';
import PropTypes from "prop-types";
import { withRouter } from "react-router";


export default class FolderPage extends React.Component{
  static contextType = StoreContext;
  static propTypes ={
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render(){
    const store = this.context
    const {match,history} = this.props;
 //console.log(props.match.params.id);
  const filternoteid = store.notes.filter((note) => {
    return note.folderId === match.params.id
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
      <button onClick={e => history.push("/")}>Back</button>
    </div>

  );
}
}