import express = require('express');

const pathToPublic = __dirname + '/../public';

const middlewareLoader = (app) => {
	app.use('/app', express.static(pathToPublic));
}

export {middlewareLoader};