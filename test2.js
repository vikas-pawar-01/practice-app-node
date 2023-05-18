const arrObj = [
	{ id: 1, value: '2' },
	{ id: 2, value: 'a1' },
	{ id: 3, value: '2.34' },
	{ id: 4, value: 5 },
];

const sumInt = (arrInput) => {
	let result = 0;
	for (let i = 0; i < arrInput.length; i++) {
		let current = arrInput[i];

		if (parseInt(arrInput[i].value)) {
			result = result + parseInt(arrInput[i].value);
		}
	}

	return result;
};

console.log(sumInt(arrObj));
