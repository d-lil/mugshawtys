"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeInmateId = exports.saveInmateIds = exports.getSavedInmateIds = void 0;
var getSavedInmateIds = function () {
    var savedInmateIds = localStorage.getItem('saved_inmates')
        ? JSON.parse(localStorage.getItem('saved_inmates'))
        : [];
    return savedInmateIds;
};
exports.getSavedInmateIds = getSavedInmateIds;
var saveInmateIds = function (inmateIdArr) {
    if (inmateIdArr.length) {
        localStorage.setItem('saved_inmates', JSON.stringify(inmateIdArr));
    }
    else {
        localStorage.removeItem('saved_inmates');
    }
};
exports.saveInmateIds = saveInmateIds;
var removeInmateId = function (inmateId) {
    var savedInmateIds = localStorage.getItem('saved_inmates')
        ? JSON.parse(localStorage.getItem('saved_inmates'))
        : null;
    if (!savedInmateIds) {
        return false;
    }
    var updatedSavedInmateIds = savedInmateIds === null || savedInmateIds === void 0 ? void 0 : savedInmateIds.filter(function (savedInmateId) { return savedInmateId !== inmateId; });
    localStorage.setItem('saved_inmates', JSON.stringify(updatedSavedInmateIds));
    return true;
};
exports.removeInmateId = removeInmateId;
