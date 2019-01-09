import {CAT_SAVED} from './ActionTypes'

// The action for saving a cat, with removeCat being the previous cat data,
// and addCat being the new cat data
export function saveCat(removeCat, addCat) {
	return {
		type: CAT_SAVED,
		removeCat: removeCat,
		addCat: addCat  
	}
}