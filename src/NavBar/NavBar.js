import React from "react";
import {Link} from "react-router-dom";
import StoreContext from '../StoreContext';


export default class NavBar extends React.Component{

static contextType = StoreContext;
render(){
  const store = this.context.store
  console.log(store);
  const folderList = store.folders.map(folder => {
    return(
      
        <li  className= "sidebar" key={folder.id}>
          <Link to={`/folderPage/${folder.id}`}><h4>{folder.name}</h4></Link>
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