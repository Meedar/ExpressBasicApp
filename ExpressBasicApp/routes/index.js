var nameApplication = "Express Basic Application";
function index(req, res) {
    res.render('index', { toto: nameApplication.toString() });
}
exports.index = index;
;
//# sourceMappingURL=index.js.map