"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserManager = exports.makeAuthenticator = exports.UserData = exports.Callback = void 0;
var makeAuth_1 = require("./makeAuth");
Object.defineProperty(exports, "UserData", { enumerable: true, get: function () { return makeAuth_1.AuthenticatorContext; } });
Object.defineProperty(exports, "makeAuthenticator", { enumerable: true, get: function () { return makeAuth_1.makeAuthenticator; } });
var makeUserManager_1 = require("./makeUserManager");
exports.makeUserManager = makeUserManager_1.default;
var Callback_1 = require("./Callback");
exports.Callback = Callback_1.default;
//# sourceMappingURL=index.js.map