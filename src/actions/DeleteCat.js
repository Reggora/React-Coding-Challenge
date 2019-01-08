export function deleteCat(cat) {
	return {
		type: 'CAT_DELETED',
		data: cat
	}
}