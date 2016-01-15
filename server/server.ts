import express = require('express');
import {config} from './config/config';
import {routes} from './config/routes';
// import * as express from 'express';

const app = express();

// app.use();

app.listen(8000, () => {console.log('listening')});