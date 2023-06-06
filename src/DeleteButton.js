export default function ItemDeleteButton({ item, onDelete }) {
    const handleDelete = () => {
        onDelete(item);
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>Delete Item</button>
    );
}