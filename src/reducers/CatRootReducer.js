import { combineReducers } from 'redux'
import CatListReducer from './CatListReducer'
import CatSelectedReducer from './CatSelectedReducer'
import CatEditReducer from './CatEditReducer'

// Combine all reducers related to cat-tracker state
const catRootReducer = combineReducers({
	cats: CatListReducer,
	catSelected: CatSelectedReducer,
	edit: CatEditReducer
})

export default catRootReducer;