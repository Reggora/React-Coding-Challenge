import {CAT_ADDED, CAT_SAVED, CAT_DELETED} from '../actions/ActionTypes'
import { catsEqual } from '../utilities/catsEqual'


// Reducer for the list of cats, initially has 0 cats
export default function (state = [], action) {
	console.log(action)
	switch(action.type) {
		case CAT_ADDED:
			let stateCopy = [...state];
			// map through the state to see if the added cat already exists
			let contains = false
			stateCopy.map((cat, index) => {
				if(catsEqual(cat, action.data)) {
					contains = true
				}
			})
			if(!contains){
				// Cat is added, concatinate to the list.
				// Uses Object.assign to avoid state mutation
				return Object.assign([], state, state.concat(action.data));
			} else {
				return state;
			}
		case CAT_SAVED:
			// Copy state array so future changes do not mutate state
			let saveArray = [...state]; 
			// For each cat in the array, find the cat being updated, 
			// remove the old data from its index, then add the new cat data
			saveArray.map((cat, index) => {
				if(catsEqual(cat, action.removeCat)) {
					saveArray.splice(index, 1)
					saveArray.splice(index, 0, action.addCat);
				}
			})
			return saveArray
		case CAT_DELETED:
			// Make a copy of state
			let array = [...state];
			// Find the matching cat in our state and remove one item
			array.map((cat, index) => {
				if(catsEqual(cat, action.data)){
					array.splice(index, 1)
				}
			})
			return array
    	default:
    		return state
	}
}