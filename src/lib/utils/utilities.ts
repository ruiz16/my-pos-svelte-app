/**
 * Maps an array of arrays of string or number values to an array of objects with keys from `keysArray`.
 * @param dataArray - The array of arrays of string or number values to map.
 * @param keysArray - The array of keys to use for the resulting objects.
 * @returns An array of objects with keys from `keysArray` and values from `dataArray`.
 */

export function customTableMapperValues<T>(dataArray: (string | number)[], keysArray: string[]): T[] {
	const mappedData: T[] = [];

	for (let i = 0; i < dataArray.length; i++) {
		const item = dataArray[i];
		const mappedItem: Partial<T> = {};

		for (let j = 0; j < keysArray.length; j++) {
			const key = keysArray[j];
			mappedItem[key as keyof T] = item as T[keyof T];
		}

		mappedData.push(mappedItem as T);
	}

	return mappedData;
}

export function calculatePaginatedSource(offset: number, limit: number, sourceData: string | any[]) {
	const start = offset * limit;
	const end = start + limit;
	if (Array.isArray(sourceData)) {
		return sourceData.slice(start, end);
	}
	return [];
}
