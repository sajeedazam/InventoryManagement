import { useDispatch } from 'react-redux';
// import { deleteItem } from '../redux/items/reducer';
import { deleteItemAsync } from '../redux/items/thunks';

export default function ItemDeleteButton({ item }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteItemAsync(item.id));
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>
            Delete Item
        </button>
    );
}
