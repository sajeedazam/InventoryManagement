const getItems = async () => {
    const res = await fetch('http://localhost:3001/items',
    {
        method: 'GET'
    });

    return res.json();
}

export default {
    getItems
};