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
var AdminNavMenu_1 = require("./AdminNavMenu");
var AdminChangeRequestBar_1 = require("./AdminChangeRequestBar");
var AdminAddVehicle = /** @class */ (function (_super) {
    __extends(AdminAddVehicle, _super);
    function AdminAddVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAddVehicle.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1.default, null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1.default, null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Remove Vehicles Requests"),
                    React.createElement("h1", null, "Add Vehicles Requests")))));
    };
    return AdminAddVehicle;
}(React.PureComponent));
exports.default = (0, react_redux_1.connect)()(AdminAddVehicle);
//# sourceMappingURL=AdminAddVehicle.js.map