import { createStore } from "redux";
import themeReducer from './redux/reducers/themeReducer'

const store = createStore(themeReducer);

export default store;