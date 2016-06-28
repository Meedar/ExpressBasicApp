/*
 * GET home page.
 */
import express = require('express');
var nameApplication = "Express Basic Application";

export function index(req: express.Request, res: express.Response) {

    res.render('index', { toto: nameApplication.toString() });
};