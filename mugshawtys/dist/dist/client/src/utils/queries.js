"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_INMATES = exports.QUERY_ME = void 0;
var client_1 = require("@apollo/client");
exports.QUERY_ME = (0, client_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query me {\n        me {\n            _id\n            username\n            email\n            image\n            gender\n            age\n            preferences\n            about\n            savedInmates {\n                _id\n                inmateName\n                inmateImage\n            }\n        }\n    },\n"], ["\n    query me {\n        me {\n            _id\n            username\n            email\n            image\n            gender\n            age\n            preferences\n            about\n            savedInmates {\n                _id\n                inmateName\n                inmateImage\n            }\n        }\n    },\n"])));
exports.QUERY_INMATES = (0, client_1.gql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query inmates {\n        inmates {\n            _id\n            username\n            image\n            gender\n            age\n            about\n        }\n    }\n"], ["\n    query inmates {\n        inmates {\n            _id\n            username\n            image\n            gender\n            age\n            about\n        }\n    }\n"])));
var templateObject_1, templateObject_2;
