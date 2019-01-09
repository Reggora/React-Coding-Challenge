import {CAT_ADDED} from './ActionTypes'

// The action for adding a cat
export function addCat(cat) {
	return {
		type: CAT_ADDED,
		data: cat
	}
}