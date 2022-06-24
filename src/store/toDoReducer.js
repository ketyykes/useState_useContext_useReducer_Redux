function toDoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_DO':
            return [...state, action.payload];
        default:
            return state;
    }
}
export default toDoReducer;