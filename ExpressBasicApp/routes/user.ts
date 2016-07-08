/*
 * GET users listing.
 */
import express = require('express');

export function list(req: express.Request, res: express.Response) {
    var responseJson =
        {
            title: 'Bienvenue dans mon objet Json',
            message: 'Ben ça marche en plus !!'
        };
    res.json(responseJson);
};