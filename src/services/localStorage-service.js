const saveCatToLocalStorage = (key, { id, url }) => {
	try {
		let serializedData;
		const savedData = loadCatsFromLocalStorage(key);

		if (savedData === null) {
			serializedData = JSON.stringify([{ id, url }]);
			localStorage.setItem(key, serializedData);
			return;
		}
		if (savedData.every((cat) => cat.id !== id)) {
			savedData.push({ id, url });
			serializedData = JSON.stringify(savedData);
			localStorage.setItem(key, serializedData);
			return;
		}
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

const loadCatsFromLocalStorage = (key) => {
	try {
		const serializedData = localStorage.getItem(key);
		return JSON.parse(serializedData);
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

const removeCatFromLocalStorage = (key, { id }) => {
	try {
		const savedData = loadCatsFromLocalStorage(key);
		const newData = [...savedData.filter((cat) => cat.id !== id)];
		const serializedData = JSON.stringify(newData);

		localStorage.setItem(key, serializedData);
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

const saveActionToLocalStorage = (type, id, action) => {
	const date = new Date();
	const time = date.toLocaleTimeString().slice(0, 5);
	const newAction = { type, id, action, time };

	try {
		let serializedData;
		const actionsHistory = loadActionsFromLocalStorage();

		if (actionsHistory === null) {
			serializedData = JSON.stringify([newAction]);
			localStorage.setItem('User Actions', serializedData);
			return;
		}

		actionsHistory.push(newAction);
		serializedData = JSON.stringify(actionsHistory);
		localStorage.setItem('User Actions', serializedData);
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

const loadActionsFromLocalStorage = () => {
	try {
		const serializedData = localStorage.getItem('User Actions');
		return JSON.parse(serializedData);
	} catch (error) {
		console.error('Get state error: ', error.message);
	}
};

export {
	saveCatToLocalStorage,
	loadCatsFromLocalStorage,
	removeCatFromLocalStorage,
	saveActionToLocalStorage,
	loadActionsFromLocalStorage,
};
