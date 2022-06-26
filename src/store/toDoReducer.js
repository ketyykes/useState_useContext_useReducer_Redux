function toDoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_DO':
            if (action.payload === "") { return state; }
            return [
                ...state,
                {
                    content: action.payload,
                    id: Date.now(),
                    done: false
                }
            ];
        case 'DELETE_TO_DO':
            return state.filter(
                toDoItem => toDoItem.id !== action.payload
            )
        case 'COMPLETE_TO_DO':
            return state.map(item => {
                if (item.id === action.payload) {
                    item.done = !item.done;
                }
                return item;
            })
        default:
            return state;
    }
}
export default toDoReducer;