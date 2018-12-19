import {
    ADD_DATA,
} from '../constants/ActionTypes'
  
export default (state = {}, action) => {
    switch (action.type) {
        case ADD_DATA:
        return Object.assign({}, state, {
            todoList: [].concat(state.todoList, [action.data])
        });
        default:
        return state
    }
}
