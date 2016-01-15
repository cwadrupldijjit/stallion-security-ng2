/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import session = require('express-session');
import bodyParser = require('body-parser');
import helmet = require('helmet');
import passport = require('passport');
import LocalStrategy = require('passport-local');
import bcrypt = require('bcryptjs');
import mongoose = require('mongoose');

const dependencies = {
	express, session, 
	bodyParser,
	helmet,
	passport, LocalStrategy, bcrypt,
	mongoose
}

export {dependencies};