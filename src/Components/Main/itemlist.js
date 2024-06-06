import React from 'react';
import { Lineitem } from './lineitem.js';

export const Itemlist = ({ listitems, handlecheckbox, handledeleteclick }) => {
  if (!listitems || !Array.isArray(listitems)) {
    console.log('itemlisst is not an array')
    return null; // Early return if items is not an array
  }

  return (
    <ul>
      {listitems.map((item,index) => (
        <Lineitem
        item={item}
          index={index}
          handlecheckbox={handlecheckbox}
          handledeleteclick={handledeleteclick}
        />
      ))}
    </ul>
  );
};
