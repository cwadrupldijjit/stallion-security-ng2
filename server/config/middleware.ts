/// <reference path="dependencies" />

import {dependencies} from './dependencies';
const {express, helmet, bodyParser, session} = dependencies;

const e = express();

const pathToPublic = __dirname + '/../public';

const middlewareLoader = (app) => {
	app.use('/app', express.static(pathToPublic));
	
	
	console.log('is this getting hit?')
	app.all('/*', (req, res) => {
		res.sendFile('index.html');
	});
}

export {middlewareLoader};