import React from 'react'

export const  Additem=({newItem,setNewItem,handleSubmit})=> {
  return (
    <>
    <form onSubmit={handleSubmit} >
    <input type="text" name="item" placeholder="Enter Item" 
    
    value={newItem}
    onChange={(e)=>setNewItem(e.target.value)} 
/>
    
    <input type="submit" value="Add" />
    </form>
    </>
  )
}
