"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var NavMenu_1 = require("./NavMenu");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' }),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("p", null, "First Name:"),
                    React.createElement("p", null, "Last Name:"),
                    React.createElement("p", null, "Business:"),
                    React.createElement("p", null, "Email:"),
                    React.createElement("p", null, "Password:"),
                    React.createElement("p", null, "Insurance start Date:")))));
    };
    return Account;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(Account);
//# sourceMappingURL=Account.js.map