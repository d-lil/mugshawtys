"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// use this to decode a token and get the user's information out of it
var jwt_decode_1 = require("jwt-decode");
// create a new class to instantiate for a user
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    // get user data
    AuthService.prototype.getProfile = function () {
        return (0, jwt_decode_1.default)(this.getToken());
    };
    // check if user's logged in
    AuthService.prototype.loggedIn = function () {
        // Checks if there is a saved token and it's still valid
        var token = this.getToken();
        return token && !this.isTokenExpired(token); // handwaiving here
    };
    // check if token is expired
    AuthService.prototype.isTokenExpired = function (token) {
        try {
            var decoded = (0, jwt_decode_1.default)(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    };
    AuthService.prototype.getToken = function () {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.login = function (idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    };
    AuthService.prototype.logout = function () {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the application
        window.location.assign('/');
    };
    return AuthService;
}());
exports.default = new AuthService();
