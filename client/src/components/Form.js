import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemDetail from './PopUp';
import ItemDeleteButton from './DeleteButton';
import { getItemsAsync, addItemAsync } from '../redux/items/thunks';
import './Form.css';

export default function ItemList() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);

    useEffect(() => {
        dispatch(getItemsAsync());
    }, []);

    const [itemName, setItemName] = useState('');
    const [SKU, setSKU] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            name: itemName,
            sku: SKU,
            description: description,
            price: parseFloat(price),
            imageUrl: imageUrl,
        };

        try {
            await dispatch(addItemAsync(newItem));
            handleClearForm();
        } catch (error) {
            console.error(error);
        }
    };

    const handleClearForm = () => {
        setItemName('');
        setSKU('');
        setDescription('');
        setPrice('');
        setImageUrl('');
    };

    return (
        <div>
            <form className="itemForm" onSubmit={handleFormSubmit}>
                <label>Item Name:</label>
                <input type="text" id="itemName" name="itemName" value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    required
                />

                <label>SKU:</label>
                <input type="text" id="SKU" name="SKU" value={SKU}
                    onChange={(e) => setSKU(e.target.value)}
                    required
                />

                <label>Description:</label>
                <textarea id="description" name="description" value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required>
                </textarea>

                <label>Price:</label>
                <input type="number" id="price" name="price" value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <label>Image URL:</label>
                <input type="text" id="imcageUrl" name="imageUrl" value={imageUrl}
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
                        <ItemDeleteButton item={item._id} />
                    </li>
                ))}
            </ul>
            {selectedItem && (
                <ItemDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
            )}
        </div>
    );
}

