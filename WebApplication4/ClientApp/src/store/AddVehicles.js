"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientReducer = exports.reducer = exports.clientActionCreators = exports.actionCreators = void 0;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestAddVehicles: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.AddVehicles && startDateIndex !== appState.AddVehicles.startDateIndex) {
            fetch("api/Vehicles/GetAddVehicle")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_ADD_VEHICLES', startDateIndex: startDateIndex, AddVehicle: data });
            });
            dispatch({ type: 'REQUEST_ADD_VEHICLES', startDateIndex: startDateIndex });
        }
    }; }
};
exports.clientActionCreators = {
    requestClientAddVehicles: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.ClientAddVehicles && startDateIndex !== appState.ClientAddVehicles.startDateIndex) {
            fetch("api/Vehicles/ClientAddVehicle")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_ADD_CLIENT_VEHICLES', startDateIndex: startDateIndex, ClientAddVehicle: data });
            });
            dispatch({ type: 'REQUEST_ADD_CLIENT_VEHICLES', startDateIndex: startDateIndex });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { AddVehicle: [], isLoading: false };
var clientUnloadedState = { ClientAddVehicle: [], isLoading: false };
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_ADD_VEHICLES':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { AddVehicle: state.AddVehicle, isLoading: true });
        case 'RECEIVE_ADD_VEHICLES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { AddVehicle: action.AddVehicle, isLoading: false });
            }
            break;
    }
    return state;
};
exports.reducer = reducer;
var clientReducer = function (state, incomingAction) {
    if (state === undefined) {
        return clientUnloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_ADD_CLIENT_VEHICLES':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientAddVehicle: state.ClientAddVehicle, isLoading: true });
        case 'RECEIVE_ADD_CLIENT_VEHICLES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientAddVehicle: action.ClientAddVehicle, isLoading: false });
            }
            break;
    }
    return state;
};
exports.clientReducer = clientReducer;
//# sourceMappingURL=AddVehicles.js.map