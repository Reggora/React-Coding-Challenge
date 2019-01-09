import {CAT_SELECTED} from './ActionTypes'

// The action for selecting a cat from the left side list
export function selectCat(cat) {
	return {
		type: CAT_SELECTED,
		data: cat
	}
}