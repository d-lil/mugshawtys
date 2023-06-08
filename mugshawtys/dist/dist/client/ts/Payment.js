"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// Import React and ReactDOM for rendering
var React = require("react");
var ReactDOM = require("react-dom");
// Import required hooks and utilities from usedapp and ethers libraries
var core_1 = require("@usedapp/core");
var units_1 = require("@ethersproject/units");
var ethers_1 = require("ethers");
// Define your DApp config for Mainnet and Goerli
var config = {
    readOnlyChainId: core_1.Mainnet.chainId,
    readOnlyUrls: (_a = {},
        _a[core_1.Mainnet.chainId] = (0, ethers_1.getDefaultProvider)('mainnet'),
        _a[core_1.Goerli.chainId] = (0, ethers_1.getDefaultProvider)('goerli'),
        _a),
};
// Define a Connect button component for connecting and disconnecting wallet
function ConnectButton() {
    var _a = (0, core_1.useEthers)(), account = _a.account, deactivate = _a.deactivate, activateBrowserWallet = _a.activateBrowserWallet;
    if (account)
        return React.createElement("button", { onClick: function () { return deactivate(); } }, "Disconnect");
    else
        return React.createElement("button", { onClick: function () { return activateBrowserWallet(); } }, "Connect");
}
// Define a SendTransaction component to send transaction
function SendTransaction() {
    var sendTransaction = (0, core_1.useSendTransaction)().sendTransaction;
    var _a = React.useState(false), disabled = _a[0], setDisabled = _a[1];
    var handleClick = function () {
        var address = 'Recipient_Address'; // Replace with the recipient's address
        var amount = 'Amount_in_Ether'; // Replace with the amount of Ether you want 
        setDisabled(true);
        sendTransaction({ to: address, value: (0, units_1.parseEther)(amount) });
    };
    return React.createElement("button", { onClick: handleClick, disabled: disabled }, "Send Transaction");
}
// Define a TransactionStatus component to display the transaction status
function TransactionStatus() {
    var transactions = (0, core_1.useTransactions)().transactions;
    var account = (0, core_1.useEthers)().account;
    var myTransactions = transactions.filter(function (tx) { return tx.transaction.from === account; });
    return (React.createElement("div", null, myTransactions.map(function (tx, index) {
        var _a;
        return (React.createElement("div", { key: index }, React.createElement("p", null, "Transaction hash: ", tx.transaction.hash), React.createElement("p", null, "Status: ", tx.receipt ? 'Mined' : 'Pending'), React.createElement("p", null, "Block number: ", (_a = tx.receipt) === null || _a === void 0 ? void 0 :
            _a.blockNumber)));
    })));
}
// Define the main App component
function App() {
    var _a = (0, core_1.useEthers)(), account = _a.account, chainId = _a.chainId;
    var etherBalance = (0, core_1.useEtherBalance)(account);
    // Check the chainId and display a message if it's not Mainnet or Goerli
    if (chainId && !config.readOnlyUrls[chainId]) {
        return React.createElement("p", null, "Please use either Mainnet or Goerli testnet.");
    }
    return (React.createElement("div", null, React.createElement(ConnectButton, null), etherBalance && (React.createElement("div", { className: "balance" }, React.createElement("br", null), "Address:", React.createElement("p", { className: "bold" }, account), React.createElement("br", null), "Balance:", React.createElement("p", { className: "bold" }, (0, units_1.formatEther)(etherBalance)))), React.createElement(SendTransaction, null), React.createElement(TransactionStatus, null)));
}
// Render the App component inside the DAppProvider
ReactDOM.render(React.createElement(core_1.DAppProvider, { config: config }, React.createElement(App, null)), document.getElementById('root'));
