import {dependencies} from './dependencies';
const {express, helmet, bodyParser, session} = dependencies;

const pathToPublic = __dirname + '/../public';

const middlewareLoader = (app) => {
	app.use('/app', express.static(pathToPublic));
}

export {middlewareLoader};