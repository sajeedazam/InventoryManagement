const getItems = async () => {
    const res = await fetch('http://localhost:3001/items',
        {
            method: 'GET'
        });

    return res.json();
}

const addItem = async (name, description, price, imageUrl) => {
    const response = await fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description, price, imageUrl })
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const deleteItem = async (itemId) => {
    const response = await fetch(`http://localhost:3001/items/${itemId}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;

}

const editItem = async (itemId, description) => {
    const response = await fetch(`http://localhost:3001/items/${itemId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
    });

    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg.message);
    }

    const data = await response.json();
    return data;
};

export default {
    getItems,
    addItem,
    deleteItem,
    editItem
};