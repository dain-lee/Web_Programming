module.exports = function(app)
{
    app.get('/', function(req, res) {
        res.render('main.html');
    });

    app.get('/area', function(req, res) {
        res.render('project.html');
    });

    app.get('/events', function(req, res) {
        res.render('events.html');
    });

    app.get('/attraction', function(req, res) {
        res.render('attraction.html');
    });

    app.get('/details', function(req, res) {
        res.render('details.html');
    });

    app.get('/mypage', function(req, res) {
        res.render('mypage.html');
    });

    app.get('/login', function(req, res) {
        res.render('index.html');
    });
}