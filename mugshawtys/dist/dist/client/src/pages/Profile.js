"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var Card_1 = require("../components/Card");
// import User from '../utils/User';
var client_1 = require("@apollo/client");
var queries_1 = require("../utils/queries");
var auth_1 = require("../utils/auth");
// import { REMOVE_INMATE } from '../utils/mutations';
// import { removeInmateId } from '../utils/localStorage';
var react_router_dom_1 = require("react-router-dom");
var Profile = function () {
    // const { username: userParam } = useParams();
    // const { loading, error, data } = useQuery(QUERY_USER, {
    //   variables: { username: "san" },
    // });
    var _a = (0, client_1.useQuery)(queries_1.QUERY_ME), loading = _a.loading, data = _a.data;
    if (!loading) {
        var user = (data === null || data === void 0 ? void 0 : data.me) || (data === null || data === void 0 ? void 0 : data.user) || {};
        console.log(data);
        if (auth_1.default.loggedIn() && auth_1.default.getProfile().data.username) {
            console.log("true");
            // return <Navigate to="/profile" />;
        }
    }
    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    // const { loading, data } = useQuery(QUERY_ME);
    // if (!token) {
    //   return false;
    // }
    // const user = data?.me || {};
    // console.log(user)
    // const [removeInmate, { error }] = useMutation(REMOVE_INMATE);
    // const handleDeleteInmate = async (inmateId) => {
    //   try {
    //     const { data } = await removeInmate({
    //       variables: { inmateId },
    //     });
    //     // upon success, remove inmate's id from localStorage
    //     removeInmateId(inmateId);
    //   } catch (err) {
    //     console.error(err);
    //   }
    // };
    console.log(data === null || data === void 0 ? void 0 : data.me);
    // if (!data?.me || !inmateData?.inmates) {
    //   return <h2>Loading...</h2>;
    // }
    return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", { className: "profile" }, react_1.default.createElement(react_bootstrap_1.Container, null, react_1.default.createElement("h1", null, data === null || data === void 0 ? void 0 : data.image))), react_1.default.createElement(react_bootstrap_1.Container, null)));
};
exports.default = Profile;
