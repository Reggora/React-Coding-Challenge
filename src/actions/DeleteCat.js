import {CAT_DELETED} from './ActionTypes'

//The action for deleting a cat
export function deleteCat(cat) {
	return {
		type: CAT_DELETED,
		data: cat
	}
}