import { useState } from 'react';
import ItemDetail from './PopUp';
import ItemDeleteButton from './DeleteButton';
import './Form.css';

const initialItems = [
    { name: 'Hammer', description: 'Steel head and wooden handle hammer', price: 15, imageUrl: "https://th.bing.com/th/id/R.08d4c4232ad5c3b152835810d8339de9?rik=wAKL6zkubUbHMg&pid=ImgRaw&r=0" },
    { name: 'Pliers', description: 'For gripping objects', price: 15, imageUrl: 'https://cdn4.iconfinder.com/data/icons/construction-and-building-1/128/13-1024.png' },
];

export default function ItemList() {
    const [items, setItems] = useState(initialItems);
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const handleDeleteItem = (item) => {
        setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
        setSelectedItem(null);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: itemName,
            description: description,
            price: price,
            imageUrl: imageUrl,
        };

        // Update the items list
        setItems((prevItems) => [...prevItems, newItem]);

        setItemName('');
        setDescription('');
        setPrice('');
        setImageUrl('');
    };

    const handleClearForm = () => {
        setItemName('');
        setDescription('');
        setPrice('');
        setImageUrl('');
    };

    return (
        <div>
            <form className="itemForm" onSubmit={handleFormSubmit}>
                <label htmlFor="itemName">Item Name:</label>
                <input type="text" id="itemName" name="itemName" value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required>
                </textarea>

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label htmlFor="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />

                <button id="submit-button" type="submit">
                    Add Item
                </button>
                <button id="clear-button" type="button" onClick={handleClearForm}>
                    Clear Form
                </button>
            </form>

            <h2>Added Items:</h2>

            <ul className='addedItems'>
                {items.map((item, index) => (
                    <li key={index}>
                        <img src={item.imageUrl} width="50" />
                        <strong> {item.name} </strong>
                        <button className="viewDetailsButton" onClick={() => setSelectedItem(item)}>View Details</button>
                        <ItemDeleteButton item={item} onDelete={handleDeleteItem} />
                    </li>
                ))}
            </ul>
            {selectedItem && (
                <ItemDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </div>
    );
}

