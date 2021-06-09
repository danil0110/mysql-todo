const express = require('express');
const sequelize = require('./utils/database');
const path = require('path');

const todoRoutes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/todo', todoRoutes);

app.use((req, res, next) => {
	res.sendFile('/index.html');
});

async function start() {
	try {
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:3000`);
		});
	} catch (e) {
		console.log(e);
	}
}

start();
