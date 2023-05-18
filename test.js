const arr = ['d', 9.98, [8, 'r', [-5, 9.7, 'a']]];

const result = [];

const flatArray = (inputArr) => {
	for (let i = 0; i < inputArr.length; i++) {
		if (Array.isArray(inputArr[i])) {
			flatArray(inputArr[i]);
		} else {
			result.push(inputArr[i]);
		}
	}

	return result;
};

console.log(flatArray(arr));
