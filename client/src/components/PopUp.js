import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editItemAsync } from '../redux/items/thunks';
import './PopUp.css';

export default function ItemDetail({ item, onClose }) {
    const [newDescription, setNewDescription] = useState('');
    const dispatch = useDispatch();
    const itemId = item._id;

    const handleEdit = async () => {
        try {
            await dispatch(editItemAsync({ itemId, description: newDescription }));
            onClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="itemDetail">
            <h2>Item Details</h2>
            <button className="closeButton" onClick={onClose}>
                X
            </button>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
            <div>
                <input
                    type="text"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    required
                />
                <button className="editButton" onClick={handleEdit}>
                    Edit Description
                </button>
            </div>
        </div>
    );
}
