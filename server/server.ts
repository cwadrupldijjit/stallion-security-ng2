import express = require('express');
import {config} from './config/config';
import {middlewareLoader} from './config/middleware';
import {routes} from './config/routes';

const app = express();

middlewareLoader(app);
routes(app);

app.listen(8000, () => {console.log('listening')});