"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./pages/Home");
var Profile_1 = require("./pages/Profile");
var Settings_1 = require("./pages/Settings");
var Navbar_1 = require("./components/Navbar");
var client_1 = require("@apollo/client");
var context_1 = require("@apollo/client/link/context");
// import CardComp from './components/Card';
var httpLink = (0, client_1.createHttpLink)({
    uri: '/graphql',
});
var authLink = (0, context_1.setContext)(function (_, _a) {
    var headers = _a.headers;
    var token = localStorage.getItem('id_token');
    return {
        headers: __assign(__assign({}, headers), { authorization: token ? "Bearer ".concat(token) : '' }),
    };
});
var client = new client_1.ApolloClient({
    link: authLink.concat(httpLink),
    cache: new client_1.InMemoryCache(),
});
function App() {
    return (react_1.default.createElement(client_1.ApolloProvider, { client: client }, react_1.default.createElement(react_router_dom_1.BrowserRouter, null, react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("link", { href: 'https://fonts.googleapis.com/css?family=Damion&display=swap', rel: 'stylesheet' }), react_1.default.createElement("link", { href: 'https://fonts.googleapis.com/css?family=Alatsi&display=swap', rel: 'stylesheet' }), react_1.default.createElement(Navbar_1.default, null), react_1.default.createElement(react_router_dom_1.Routes, null, react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Home_1.default, null) }), react_1.default.createElement(react_router_dom_1.Route, { path: '/settings', element: react_1.default.createElement(Settings_1.default, null) }), react_1.default.createElement(react_router_dom_1.Route, { path: '/profile', element: react_1.default.createElement(Profile_1.default, null) }), react_1.default.createElement(react_router_dom_1.Route, { path: '*', element: react_1.default.createElement("h1", { className: 'display-2' }, "Wrong page!") }))))));
}
exports.default = App;
