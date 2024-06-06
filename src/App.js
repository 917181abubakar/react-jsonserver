import { MdNoAdultContent } from 'react-icons/md';
import './App.css';
import { Header } from './Components/Header/header';
import {Content} from  './Components/Main/content.js';
import {Additem} from  './Components/Main/additem.js';
import {Searchitem} from  './Components/Main/searchitem.js';
import {useEffect, useState} from'react';


function App() {

  
  // Ensure proper initialization
  const [listitems, setItems] = useState([]);
 
  const [search, setsearch]=useState('');
  const [newItem, setNewItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

const API_URL="http://localhost:5500/items" ;

useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    (async() => await fetchItems())();

  }, [])

  
  const handledeleteclick = async (id) => {
    const listItems = listitems.filter((item) => item.id !== id);
    setItems(listItems);

    const reqLink = `${API_URL}/${id}`;
    console.log('Request URL:', reqLink);
  
    try {
      const response = await fetch(reqLink, 
        { method: 'DELETE' ,mode:'cors',
        }
      );

      console.log('Response:', response);
  
      if (response.ok) {            
        console.log('Deleted successfully');
      } else {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Error during delete request:', error);
    }
  };

  

  const handlecheckbox = async (id) => {
    const newlistitems = listitems.map((item) => (item.id === id) ?{...item, checked:!item.checked}: item);
    
    setItems(newlistitems);
    const reqLink = `${API_URL}/${id}`;
    const myItem = newlistitems.filter((item) => item.id === id);

    try {
      const response = await fetch(reqLink, 
        { method: 'PATCH' ,mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({checked:myItem[0].checked})}
        
      );

      console.log('Response:', response);
  
      if (response.ok) {            
        console.log('updated successfully');
      } else {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Error updating  request:', error);
    }

    
}

const handleSubmit = async (event) => {
    event.preventDefault();
    const newitem = {
        id: listitems.length + 1,
        checked: false,
        item: event.target.item.value
    }
    const newlistitems=[...listitems, newitem];
    setItems(newlistitems);
    
    const reqLink = `${API_URL}`;

    try {
      const response = await fetch(reqLink, 
        { method: 'POST' ,mode:'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({newitem})}
        
      );

      console.log('Response:', response);
  
      if (response.ok) {            
        console.log('adding successfully');
      } else {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Error adding  request:', error);
    }

    event.target.item.value = "";

}


   
  return (
    <div className="App">
      <Header />
      <Searchitem
      search={search}
      setsearch={setsearch}
      
      />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
      listitems={  listitems.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
        }
        handlecheckbox={handlecheckbox}
      handledeleteclick={handledeleteclick}
      />
    </div>
  );
}

export default App;
