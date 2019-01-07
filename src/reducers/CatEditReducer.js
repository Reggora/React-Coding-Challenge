export default function (state = false, action) {
	switch(action.type) {
		case 'EDIT_CAT':
			return !state;
		case 'CAT_SELECTED':
			return false;
		case 'CAT_ADDED':
			return false;
		default:
			return state;
	}
}