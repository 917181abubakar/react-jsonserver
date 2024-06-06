import React from 'react';

export const Searchitem = ({ search, setsearch }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); }}>
      <input
        type="text"
        role="searchbox"
        placeholder="Search Item"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </form>
  );
};
