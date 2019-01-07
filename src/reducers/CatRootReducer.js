import { combineReducers } from 'redux'
import CatListReducer from './CatListReducer'
import CatSelectedReducer from './CatSelectedReducer'
import CatEditReducer from './CatEditReducer'

const catRootReducer = combineReducers({
	cats: CatListReducer,
	catSelected: CatSelectedReducer,
	edit: CatEditReducer
})

export default catRootReducer;