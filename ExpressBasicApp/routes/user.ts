/*
 * GET users listing.
 */
import express = require('express');

export function list(req: express.Request, res: express.Response) {
    res.render('users', { title: 'Users page' });
};