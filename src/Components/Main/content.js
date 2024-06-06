import React from 'react';
import { Itemlist } from './itemlist.js';

export const Content = ({ listitems, handlecheckbox, handledeleteclick }) => {
  return (
    <>
      {listitems.length ? (
        <Itemlist
        listitems={listitems}
        handlecheckbox={handlecheckbox}
          handledeleteclick={handledeleteclick}
        />
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </>
  );
};
