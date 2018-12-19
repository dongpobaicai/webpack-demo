import { ADD_DATA }  from '../constants/ActionTypes';

/**
 * 获取个人信息列表
 */
export const addNewTodo = (data) => {
    return {
        type: ADD_DATA,
        data,
    };
}