/// <reference path="dependencies" />

import {dependencies} from './dependencies';
const {express, helmet, bodyParser, session} = dependencies;

const e = express();

const middlewareLoader = (app, pathToPublic) => {
	app.use('/app', express.static(pathToPublic + '/app'));
	app.use('/node_modules', express.static(pathToPublic + '/../node_modules'));
}

export {middlewareLoader};