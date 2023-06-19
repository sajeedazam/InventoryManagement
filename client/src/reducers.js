const initialState = {
    items: [
        { name: 'Hammer', description: 'Steel head and wooden handle hammer', price: 15, imageUrl: "https://th.bing.com/th/id/R.08d4c4232ad5c3b152835810d8339de9?rik=wAKL6zkubUbHMg&pid=ImgRaw&r=0" },
        { name: 'Pliers', description: 'For gripping objects', price: 15, imageUrl: 'https://cdn4.iconfinder.com/data/icons/construction-and-building-1/128/13-1024.png' },
    ],
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter((item) => item !== action.payload),
            };
        default:
        return state;
    }
};
