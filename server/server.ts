/// <reference path="config/dependencies.ts" />

import {dependencies} from './config/dependencies';
import {config} from './config/config';
import {middlewareLoader} from './config/middleware';
import {routes} from './config/routes';

const {express} = dependencies;

const app = express();

middlewareLoader(app);
routes(app);

app.listen(8000, () => {console.log('listening')});