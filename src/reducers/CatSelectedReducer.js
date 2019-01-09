import {CAT_SELECTED, CAT_SAVED, CAT_DELETED} from '../actions/ActionTypes'
import { catsEqual } from '../utilities/catsEqual'

// Reducer to hold the selected cat, initialized to null
export default function (state = null, action) {
	switch(action.type) {
		case CAT_SELECTED:
			// When a cat is selected, the new cat becomes the selected cat
			return action.data;
		case CAT_SAVED:
			// When a cat is saved the returned cat is now the selected cat
			return action.addCat;
		case CAT_DELETED:
			// If the selected cat is deleted, return null
			if(catsEqual(action.data, state)){
				return null
			} else {
				return state
			}
		default:
			return state;
	}
}