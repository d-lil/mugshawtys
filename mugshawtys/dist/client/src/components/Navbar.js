"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var SignupForm_1 = require("./SignupForm");
var LoginForm_1 = require("./LoginForm");
var auth_1 = require("../utils/auth");
var AppNavbar = function () {
    // set modal display state
    var _a = (0, react_1.useState)(false), showModal = _a[0], setShowModal = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Navbar, { bg: 'dark', variant: 'dark', expand: 'lg', className: 'nav' },
            react_1.default.createElement("div", { className: "d-flex flex-nowrap w-100" },
                react_1.default.createElement(react_bootstrap_1.Navbar.Brand, { as: react_router_dom_1.Link, to: '/', className: "d-flex justify-content-start title", id: "title" }, "Babes Behind Bars"),
                react_1.default.createElement(react_bootstrap_1.Navbar.Collapse, { className: 'd-flex justify-content-end' },
                    react_1.default.createElement(react_bootstrap_1.Nav, { className: 'ml-auto d-flex' }, auth_1.default.loggedIn() ? (react_1.default.createElement(react_bootstrap_1.NavDropdown, { title: "\uD83C\uDFC3\u200D\u2642\uFE0F\uD83D\uDCA8\uD83D\uDE93" },
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { as: react_router_dom_1.Link, to: '/profile' }, "Profile"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { as: react_router_dom_1.Link, to: '/settings' }, "Settings"),
                        react_1.default.createElement(react_bootstrap_1.NavDropdown.Item, { onClick: auth_1.default.logout }, "Logout"))) : (react_1.default.createElement(react_bootstrap_1.Nav.Link, { onClick: function () { return setShowModal(true); } }, "Login/Sign Up")))))),
        react_1.default.createElement(react_bootstrap_1.Modal, { size: 'lg', show: showModal, onHide: function () { return setShowModal(false); }, "aria-labelledby": 'signup-modal' },
            react_1.default.createElement(react_bootstrap_1.Tab.Container, { defaultActiveKey: 'login' },
                react_1.default.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
                    react_1.default.createElement(react_bootstrap_1.Modal.Title, { id: 'signup-modal' },
                        react_1.default.createElement(react_bootstrap_1.Nav, { variant: 'pills' },
                            react_1.default.createElement(react_bootstrap_1.Nav.Item, null,
                                react_1.default.createElement(react_bootstrap_1.Nav.Link, { eventKey: 'login' }, "Login")),
                            react_1.default.createElement(react_bootstrap_1.Nav.Item, null,
                                react_1.default.createElement(react_bootstrap_1.Nav.Link, { eventKey: 'signup' }, "Sign Up"))))),
                react_1.default.createElement(react_bootstrap_1.Modal.Body, null,
                    react_1.default.createElement(react_bootstrap_1.Tab.Content, null,
                        react_1.default.createElement(react_bootstrap_1.Tab.Pane, { eventKey: 'login' },
                            react_1.default.createElement(LoginForm_1.default, { handleModalClose: function () { return setShowModal(false); } })),
                        react_1.default.createElement(react_bootstrap_1.Tab.Pane, { eventKey: 'signup' },
                            react_1.default.createElement(SignupForm_1.default, { handleModalClose: function () { return setShowModal(false); } }))))))));
};
exports.default = AppNavbar;
