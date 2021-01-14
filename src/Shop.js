import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/items/list'
            );

        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    };


  return (
    <div>
        {items && items.map(item => (
            <h1 key={item.id}>{item.name}</h1>
        ))}
    </div>
  );
}

export default Shop;
