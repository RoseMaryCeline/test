export default function (state = [], action) {
    switch (action.type) {
        case 'ITEMS_LOADED':
            return action.payload;
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'REMOVE_ITEM':
            return [...state, action.itemId];
        case 'EDIT_ITEM':
            return [...state, action.payload]
        default:
            return state;
    }
}

