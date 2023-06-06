export default function ItemDeleteButton({ item, onDelete }) {
    // event handler 
    const handleDelete = () => {
        onDelete(item);
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>Delete Item</button>
    );
}