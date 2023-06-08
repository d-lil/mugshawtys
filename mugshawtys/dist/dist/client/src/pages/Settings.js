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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var client_1 = require("@apollo/client");
var mutations_1 = require("../utils/mutations");
var SettingsForm = function () {
    // set initial form state
    var _a = (0, react_1.useState)({ image: '', preferences: '', about: '' }), userFormData = _a[0], setUserFormData = _a[1];
    // set state for form validation
    var validated = (0, react_1.useState)(false)[0];
    // set state for alert
    var _b = (0, react_1.useState)(false), showAlert = _b[0], setShowAlert = _b[1];
    var _c = (0, client_1.useMutation)(mutations_1.UPDATE_USER), updateUser = _c[0], _d = _c[1], error = _d.error, data = _d.data;
    var handleInputChange = function (event) {
        var _a;
        var _b = event.target, name = _b.name, value = _b.value;
        setUserFormData(__assign(__assign({}, userFormData), (_a = {}, _a[name] = value, _a)));
    };
    var handleFormSubmit = function (event) {
        return __awaiter(void 0, void 0, void 0, function () {
            var form, data_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        form = event.currentTarget;
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        console.log(userFormData);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, updateUser({
                                variables: __assign({}, userFormData),
                            })];
                    case 2:
                        data_1 = (_a.sent()).data;
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        setUserFormData({
                            image: "".concat(data.updateUser.image),
                            preferences: "".concat(data.updateUser.preferences),
                            about: "".concat(data.updateUser.about),
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    var uploadedImage = react_1.default.useRef(null);
    var imageUploader = react_1.default.useRef(null);
    var handleImageUpload = function (e) {
        var file = e.target.files[0];
        if (file) {
            var reader = new FileReader();
            var current_1 = uploadedImage.current;
            current_1.file = file;
            reader.onload = function (e) {
                current_1.src = e.target.result;
                console.log(current_1.src);
            };
            reader.readAsDataURL(file);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(react_bootstrap_1.Form, { validated: validated, noValidate: true, onSubmit: handleFormSubmit, className: 'settingsPage' }, react_1.default.createElement(react_bootstrap_1.Alert, { dismissible: true, onClose: function () { return setShowAlert(false); }, show: showAlert, variant: 'danger' }, "Ruh-Roh! Something went wrong!"), react_1.default.createElement(react_bootstrap_1.Form.Group, { className: 'mb-3' }, react_1.default.createElement(react_bootstrap_1.Form.Label, { htmlFor: 'image', className: 'title', id: 'label' }, react_1.default.createElement("u", null, react_1.default.createElement("b", null, "Upload an Image"))), react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        } }, react_1.default.createElement("input", { type: "file", accept: "image/*", onChange: handleImageUpload, ref: imageUploader, style: {
            display: "none"
        } }), react_1.default.createElement("div", { style: {
            height: "90px",
            width: "90px",
            border: "1px black"
        }, onClick: function () { return imageUploader.current.click(); } }, react_1.default.createElement("img", { ref: uploadedImage, style: {
            width: "100%",
            height: "100%",
        } })), "Click to upload Image")), react_1.default.createElement(react_bootstrap_1.Form.Group, { className: 'mb-3' }, react_1.default.createElement(react_bootstrap_1.Form.Label, { htmlFor: 'preferences', className: 'title', id: 'label' }, react_1.default.createElement("u", null, react_1.default.createElement("b", null, "Preferences"))), react_1.default.createElement("p", null, "Please Select One"), react_1.default.createElement("select", { name: 'preferences', onChange: handleInputChange, value: userFormData.preferences }, react_1.default.createElement("option", { name: 'male', value: 'male' }, "Felonious Fellas (M)"), react_1.default.createElement("option", { name: 'female', value: 'female' }, "Miss Demeanors (F)"), react_1.default.createElement("option", { name: 'both', value: 'both' }, "Both"))), react_1.default.createElement(react_bootstrap_1.Form.Group, { className: 'mb-3' }, react_1.default.createElement(react_bootstrap_1.Form.Label, { htmlFor: 'about', className: 'title', id: 'label' }, react_1.default.createElement("u", null, react_1.default.createElement("b", null, "About"))), react_1.default.createElement("p", null, "Feel free to be honest about your charges here, love is based on honesty!"), react_1.default.createElement("p", null, "Or if you haven't been in trouble with the law and are just into bad boys/girls, let them know!"), react_1.default.createElement("textarea", { className: 'settingsInput', rows: '8', cols: '50', placeholder: 'Write a little about yourself', name: 'about', onChange: handleInputChange, value: userFormData.about })), react_1.default.createElement(react_bootstrap_1.Button, { type: 'submit', variant: 'success' }, "Submit"))));
};
exports.default = SettingsForm;
