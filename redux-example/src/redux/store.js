import { compose, createStore } from "redux";
import rootReducer from './reducers'; // reducers/index.js
const store = createStore(rootReducer, compose(__REDUX_DEVTOOLS_EXTENSION__()))


export default store;