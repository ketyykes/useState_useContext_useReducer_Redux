export function addToDo(input) {
    return {
        type: 'ADD_TO_DO',
        payload: input
    }
}
export function deleteToDo(id) {
    return {
        type: "DELETE_TO_DO",
        payload: id
    }
}
export function completeToDo(id) {
    return {
        type: "COMPLETE_TO_DO",
        payload: id
    }
}