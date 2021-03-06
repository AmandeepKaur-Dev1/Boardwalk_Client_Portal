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
    requestAddDrivers: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.AddDrivers && startDateIndex !== appState.AddDrivers.startDateIndex) {
            fetch("api/Drivers/GetAddDriver")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_ADD_DRIVERS', startDateIndex: startDateIndex, AddDriver: data });
            });
            dispatch({ type: 'REQUEST_ADD_DRIVERS', startDateIndex: startDateIndex });
        }
    }; }
};
exports.clientActionCreators = {
    requestClientAddDrivers: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.ClientAddDrivers && startDateIndex !== appState.ClientAddDrivers.startDateIndex) {
            fetch("api/Drivers/ClientAddDriver")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_ADD_CLIENT_DRIVERS', startDateIndex: startDateIndex, ClientAddDriver: data });
            });
            dispatch({ type: 'REQUEST_ADD_CLIENT_DRIVERS', startDateIndex: startDateIndex });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { AddDriver: [], isLoading: false };
var clientUnloadedState = { ClientAddDriver: [], isLoading: false };
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_ADD_DRIVERS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { AddDriver: state.AddDriver, isLoading: true });
        case 'RECEIVE_ADD_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { AddDriver: action.AddDriver, isLoading: false });
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
        case 'REQUEST_ADD_CLIENT_DRIVERS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientAddDriver: state.ClientAddDriver, isLoading: true });
        case 'RECEIVE_ADD_CLIENT_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientAddDriver: action.ClientAddDriver, isLoading: false });
            }
            break;
    }
    return state;
};
exports.clientReducer = clientReducer;
//# sourceMappingURL=AddDrivers.js.map