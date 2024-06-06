import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
export const Lineitem = ({item,index,handlecheckbox,handledeleteclick}) => {
  return (
    <>
        <li className="recordli" key={index}>
                <input type="checkbox"  role="checkbox"
                checked={item.checked} 
                onChange={()=>handlecheckbox(item.id)}>
                
                </input>
                {item.item}

                <FaTrashAlt role='button' 
                onClick={()=>handledeleteclick(item.id)}>Delete
                </FaTrashAlt>
                {/* <FaEdit role='button' onClick={handleeditclick}>Edit</FaEdit> */}

            </li>
            </>
  )
}
