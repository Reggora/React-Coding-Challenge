export function saveCat(removeCat, addCat) {
	return {
		type: 'CAT_SAVED',
		removeCat: removeCat,
		addCat: addCat  
	}
}