"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;

var React = require("react");

var react_redux_1 = require("react-redux");

var Sidebarmr_1 = require("./Sidebarmr");

var EquipmentsStore = require("../store/Equipments");

var Accordion_1 = require("./Accordion");

var scheduledEquipments =
/** @class */
function (_super) {
  __extends(scheduledEquipments, _super);

  function scheduledEquipments() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  scheduledEquipments.prototype.componentDidMount = function () {
    this.ensureDataFetched();
  }; // This method is called when the route parameters change


  scheduledEquipments.prototype.componentDidUpdate = function () {
    this.ensureDataFetched();
  };

  scheduledEquipments.prototype.ensureDataFetched = function () {
    var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
    this.props.requestEquipments(startDateIndex);
  };

  scheduledEquipments.prototype.showEquipments = function () {
    console.log(this.props.Equipments);
    return React.createElement("div", null, this.props.Equipments.map(function (d, index) {
      return React.createElement("div", null, React.createElement(Accordion_1.CustomAccordion, {
        key: index,
        title: "Equipments" + d.clientId,
        content: React.createElement("div", null, React.createElement("p", null, "Make : ", d.make), React.createElement("p", null, "Model : ", d.model), React.createElement("p", null, "Make : ", d.year), React.createElement("p", null, "Seriel Number : ", d.serialNumber), React.createElement("p", null, "Value : ", d.value))
      }), React.createElement("br", null));
    }));
  };

  scheduledEquipments.prototype.render = function () {
    return React.createElement(React.Fragment, null, React.createElement("div", {
      className: 'row'
    }, React.createElement("div", {
      className: 'col-4'
    }, React.createElement(Sidebarmr_1["default"], null)), React.createElement("div", {
      className: 'col-8',
      id: 'mr1add'
    }, React.createElement("h1", null, "Add New Equipment"), React.createElement("form", null, React.createElement("input", {
      type: 'text',
      placeholder: 'Year'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Make'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Model'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Value   '
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'text',
      placeholder: 'Serial Number'
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: 'submit',
      value: 'submit'
    })), React.createElement("br", null), React.createElement("br", null), this.showEquipments())));
  };

  return scheduledEquipments;
}(React.PureComponent);

;
exports["default"] = react_redux_1.connect(function (state) {
  return state.Equipments;
}, EquipmentsStore.actionCreators)(scheduledEquipments);