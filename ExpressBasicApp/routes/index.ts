/*
 * GET home page.
 */
import express = require('express');
var title = "Index page";

export function index(req: express.Request, res: express.Response) {

    res.render('index', { title: title.toString() });
};