"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Card_1 = require("../components/Card");
// import User from '../utils/User';
var auth_1 = require("../utils/auth");
var hearthands_png_1 = require(".././components/images/hearthands.png");
var Home = function () {
    // create state for holding returned google api data
    // const [inmates, setInmates] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');
    // try {
    //   const response = await searchInmates("jason");
    //   if (!response.ok) {
    //     throw new Error('something went wrong!');
    //   }
    //   const { items } = await response.json();
    //   console.log(items);
    //   const inmates = items.map((book) => ({
    //     bookId: book.id,
    //     authors: book.volumeInfo.authors || ['No author to display'],
    //     title: book.volumeInfo.title,
    //     description: book.volumeInfo.description || 'No description to display',
    //     image: book.volumeInfo.imageLinks?.thumbnail || '',
    //   }));
    // };
    // } catch (err) {
    //   console.error(err);
    // }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_bootstrap_1.Container, null, auth_1.default.loggedIn() ? (react_1.default.createElement(Card_1.default, null)) : (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", { className: "title" }, "Sign up or login to start matching!"),
            react_1.default.createElement("img", { src: hearthands_png_1.default, alt: 'hearthands', className: "heart" }))))));
};
exports.default = Home;
