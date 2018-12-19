import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducers from '../reducers';

const configureStore = preloadedState => {
    const store = createStore(rootReducers, preloadedState, 
        applyMiddleware(thunk, createLogger())
    )
    return store;
}

export default configureStore


/**
 * redux 创建store的方法，createStore()
 * 第一个参数，是reduce集合
 * 第二个参数，初始时的state，在服务端同构时候会用到
 * 第三个参数，是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。与中间件类似
 * 
 * 
 * 
 * applyMiddleware    扩展机制
 * 
 * 
 * store.dispatch(xxx)  xxx  为action对象
 * redux-thunk  改进dispatch方法，让其可以接受一个函数
 * 
 * redux-logger   redux日志包
 * 
 */

