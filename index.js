require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/todos', async (req, res) => {
	res.json([{ id: 1, name: 'Todo 1' }]);
});

let listener = app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log(err);
		res.send({ status: 500, data: { message: err } });
	}
	console.log(`App connected to PORT: ${listener.address().port}`);
});
