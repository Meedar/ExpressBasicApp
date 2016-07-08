function list(req, res) {
    var responseJson = {
        title: 'Bienvenue dans mon objet Json',
        message: 'Ben ça marche en plus !!'
    };
    res.json(responseJson);
}
exports.list = list;
;
//# sourceMappingURL=user.js.map