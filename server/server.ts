/// <reference path="config/dependencies.ts" />

import {dependencies} from './config/dependencies';
import {config} from './config/config';
import {middlewareLoader} from './config/middleware';
import {routes} from './config/routes';

const {express} = dependencies;

const pathToPublic = __dirname + '/../public';

const app = express();

middlewareLoader(app, pathToPublic);
routes(app);


app.all('/*', (req, res) => {
	res.sendFile('index.html', {root: pathToPublic});
});

app.listen(8000, () => {console.log('listening')});