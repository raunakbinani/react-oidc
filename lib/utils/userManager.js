"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserManager = (function () {
    function UserManager(args) {
        this.getUserFunction = args.getUserFunction;
        this.signinRedirectFunction = args.signinRedirectFunction;
        this.signinRedirectCallbackFunction = args.signinRedirectCallback;
        this.signoutRedirectFunction = args.signoutRedirectFunction;
        this.signoutRedirectCallbackFunction = args.signoutRedirectCallback;
    }
    UserManager.prototype.getUser = function () {
        return this.getUserFunction() || new Promise(function (res) { return res(); });
    };
    UserManager.prototype.removeUser = function () {
        this.getUser = function () { return new Promise(function (res) { return res(null); }); };
    };
    UserManager.prototype.signinRedirect = function () {
        return this.signinRedirectFunction
            ? this.signinRedirectFunction()
            : undefined;
    };
    UserManager.prototype.signinRedirectCallback = function () {
        return this.signinRedirectCallbackFunction
            ? this.signinRedirectCallbackFunction()
            : new Promise(function (res) { return res(); });
    };
    UserManager.prototype.signoutRedirect = function () {
        return this.signoutRedirectFunction
            ? this.signoutRedirectFunction()
            : undefined;
    };
    UserManager.prototype.signoutRedirectCallback = function () {
        return this.signoutRedirectCallbackFunction
            ? this.signoutRedirectCallbackFunction()
            : undefined;
    };
    return UserManager;
}());
exports.default = UserManager;
//# sourceMappingURL=userManager.js.map