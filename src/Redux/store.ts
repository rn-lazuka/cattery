import ThunkMiddleWare from 'redux-thunk'
import ParentsReducer from './ParentsReducer'
import {applyMiddleware, combineReducers, compose, createStore} from "redux"

let rootReducer = combineReducers(
    {
        parents: ParentsReducer,
    }
);

type RootReducerType=typeof rootReducer;
export type AppStateType=ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkMiddleWare)));

// @ts-ignore
window.store = store;

export default store