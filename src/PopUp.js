import './PopUp.css';

export default function ItemDetail({ item, onClose }) {
    return (
        <div className="itemDetail">
            <h2>Item Details</h2>
            <button className="closeButton" onClick={onClose}>
                X
            </button>
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
}
