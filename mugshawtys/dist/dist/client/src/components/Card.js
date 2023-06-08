"use strict";
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
var react_tinder_card_1 = require("react-tinder-card");
require("./Card.css");
var client_1 = require("@apollo/client");
var queries_1 = require("../utils/queries");
var mutations_1 = require("../utils/mutations");
var localStorage_1 = require("../utils/localStorage");
var db = [
    {
        username: 'Saoirse',
        image: 'https://www.mindfood.com/wp-content/uploads/2018/10/Saoirse-Ronan-M.jpeg',
        age: '26',
    },
    {
        username: 'Brendan',
        image: 'https://imengine.public.prod.dur.navigacloud.com/?uuid=A207CDAC-187A-4AD4-B9FA-AC9E233E43AB&function=original&type=preview',
        age: '31',
    },
    {
        username: 'Lujan',
        image: 'https://pbs.twimg.com/ext_tw_video_thumb/1569885466433929218/pu/img/SZUskyRF83Km_50l.jpg',
        age: '25',
    },
    {
        username: 'Pitt',
        image: 'https://i.insider.com/536a4500ecad042454b1a77a?width=1018&format=jpeg',
        age: '29',
    }
];
var preferences = "male";
function Card() {
    var _this = this;
    var _a = (0, client_1.useQuery)(queries_1.QUERY_INMATES), inmateLoading = _a.loading, inmateData = _a.data;
    console.log(inmateData === null || inmateData === void 0 ? void 0 : inmateData.inmates);
    // const inmateInfo = inmateData && inmateData.inmates.map((inmate) => ({
    //   inmateId: inmate._id,
    //   username: inmate.username,
    //   image: inmate.image,
    //   age: inmate.age,
    //   gender: inmate.gender,  
    // }));
    // console.log(inmateInfo);
    // console.log(inmateInfo[0].gender);
    // if (preferences == "male") {
    //   let male = inmateInfo.filter(function (el) {
    //     return el.gender == "male"
    //   }) 
    //   console.log(male);
    // }
    var _b = (0, react_1.useState)(db.length - 1), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = (0, react_1.useState)(), lastDirection = _c[0], setLastDirection = _c[1];
    // used for outOfFrame closure
    var currentIndexRef = (0, react_1.useRef)(currentIndex);
    var childRefs = (0, react_1.useMemo)(function () {
        return Array(db.length)
            .fill(0)
            .map(function (i) { return react_1.default.createRef(); });
    }, []);
    var updateCurrentIndex = function (val) {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };
    var canGoBack = currentIndex < db.length - 1;
    var canSwipe = currentIndex >= 0;
    // set last direction and decrease current index
    var swiped = function (direction, nameToDelete, index) {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };
    var outOfFrame = function (username, idx) {
        console.log("".concat(username, " (").concat(idx, ") left the screen!"), currentIndexRef.current);
        // handle the case in which go back is pressed before card goes outOfFrame
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
        // TODO: when quickly swipe and restore multiple times the same card,
        // it happens multiple outOfFrame events are queued and the card disappear
        // during latest swipes. Only the last outOfFrame event should be considered valid
    };
    var swipe = function (dir) {
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(canSwipe && currentIndex < db.length))
                            return [3 /*break*/, 2];
                        return [4 /*yield*/, childRefs[currentIndex].current.swipe(dir)]; // Swipe the card!
                    case 1:
                        _a.sent(); // Swipe the card!
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // increase current index and show card
    var goBack = function () {
        return __awaiter(_this, void 0, void 0, function () {
            var newIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!canGoBack)
                            return [2 /*return*/];
                        newIndex = currentIndex + 1;
                        updateCurrentIndex(newIndex);
                        return [4 /*yield*/, childRefs[newIndex].current.restoreCard()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return (react_1.default.createElement("div", { className: 'cardDiv' }, react_1.default.createElement("link", { href: 'https://fonts.googleapis.com/css?family=Damion&display=swap', rel: 'stylesheet' }), react_1.default.createElement("link", { href: 'https://fonts.googleapis.com/css?family=Alatsi&display=swap', rel: 'stylesheet' }), react_1.default.createElement("div", { className: 'cardContainer' }, db.map(function (character, index) {
        return (react_1.default.createElement(react_tinder_card_1.default, { ref: childRefs[index], className: 'swipe', key: character.username, onSwipe: function (dir) { return swiped(dir, character.username, index); }, onCardLeftScreen: function () { return outOfFrame(character.username, index); } }, react_1.default.createElement("div", { style: { backgroundImage: 'url(' + character.image + ')' }, className: 'card' }, react_1.default.createElement("h3", { className: "cardName" }, react_1.default.createElement("b", null, character.username), " - ", character.age, "  "))));
    })), react_1.default.createElement("div", { className: 'buttons' }, react_1.default.createElement("button", { style: { backgroundColor: !canSwipe && '#c3c4d3' }, onClick: function () { return swipe('left'); } }, "\u2716"), react_1.default.createElement("button", { style: { backgroundColor: !canGoBack && '#c3c4d3' }, onClick: function () { return goBack(); } }, "\u21AA"), react_1.default.createElement("button", { style: { backgroundColor: !canSwipe && '#c3c4d3' }, onClick: function () { return swipe('right'); } }, "\uD83D\uDDA4")), lastDirection ? (react_1.default.createElement("h6", { key: lastDirection, className: 'infoText' }, "You swiped ", lastDirection)) : (react_1.default.createElement("h6", { className: 'infoText' }, "You can only undo once you have swiped!"))));
}
exports.default = Card;
