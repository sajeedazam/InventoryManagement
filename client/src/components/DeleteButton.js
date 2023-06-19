import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions';

export default function ItemDeleteButton({ item }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItem(item));
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>
            Delete Item
        </button>
    );
}
