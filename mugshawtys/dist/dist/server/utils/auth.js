var jwt = require('jsonwebtoken');
var secret = "loveisnotacrime";
var expiration = "2h";
module.exports = {
    // function for our authenticated routes
    authMiddleware: function (_a) {
        var req = _a.req;
        // allows token to be sent via  req.query or headers
        var token = req.query.token || req.headers.authorization || req.body.token;
        if (req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }
        if (!token) {
            return req;
        }
        // verify token and get user data out of it
        try {
            var data = jwt.verify(token, secret, { maxAge: expiration }).data;
            req.user = data;
        }
        catch (_b) {
            console.log('Invalid token');
        }
        return req;
    },
    signToken: function (_a) {
        var username = _a.username, email = _a.email, _id = _a._id;
        var payload = { username: username, email: email, _id: _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};
