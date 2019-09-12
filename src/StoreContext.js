import React from 'react';

const StoreContext =  React.createContext({
  folders:[],
  notes:[],
  removeNotes:()=>{}
});

export default StoreContext