require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/todos', async (req, res) => {
	const arr = ['d', 9.98, [8, 'r', [-5, 9.7, 'a']]];

	const result = [];
	const flatArray = (inputArr) => {
		for (let i = 0; i < inputArr.length; i++) {
			if (inputArr[i] > 0) {
				flatArray(inputArr[i]);
			} else {
				result.push(inputArr[i]);
			}
		}
	};

	res.json([{ id: 1, name: 'Todo 1' }]);
});

let listener = app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log(err);
		res.send({ status: 500, data: { message: err } });
	}
	console.log(`App connected to PORT: ${listener.address().port}`);
});
