import { combineReducers, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "../redux/phoneBook-reducer";

// import initialState from "../data/initialContacts.json"

const rootReducer = combineReducers({
    contacts: contactReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;