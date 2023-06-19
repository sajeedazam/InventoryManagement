import { useDispatch } from 'react-redux';
//import { deleteItem } from '../actions';
import { deleteItem } from '../redux/items/reducer';

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
