import {CAT_EDIT, CAT_SELECTED, CAT_ADDED, CAT_SAVED} from '../actions/ActionTypes'

// Reducer for the editing state of the app, defaults to false

// If another action like selecting, adding, or saving occurs
// editting is interrupted and the edit changes are discarded
export default function (state = false, action) {
	switch(action.type) {
		case CAT_EDIT:
			// Toggled via the edit button or the edit cancel button
			return !state;
		case CAT_SELECTED:
			return false;
		case CAT_ADDED:
			return false;
		case CAT_SAVED:
			return false
		default:
			return state;
	}
}