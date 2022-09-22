import { useState, useCallback } from 'react';

export default (initialvalue = null) => {
	const [value, setValue] = useState(initialvalue);
	const handler = useCallback((e) => {
		setValue(e.target.value);
	}, []);
	return [value, handler];
};
