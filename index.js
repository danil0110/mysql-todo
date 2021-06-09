const express = require('express');
const sequelize = require('./utils/database');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolver = require('./graphql/resolver');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(
	graphqlHTTP({
		schema,
		rootValue: resolver,
		graphiql: true,
	})
);

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
