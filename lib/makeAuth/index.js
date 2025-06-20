"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.makeAuthenticator = exports.AuthenticatorContext = void 0;
var React = require("react");
var RedirectToAuth_1 = require("../RedirectToAuth");
var DEFAULT_CONTEXT = {
    signOut: function () { },
    user: null,
    userManager: null
};
var AuthenticatorContext = React.createContext(DEFAULT_CONTEXT);
exports.AuthenticatorContext = AuthenticatorContext;
function makeAuthenticator(_a) {
    var userManager = _a.userManager, placeholderComponent = _a.placeholderComponent, signinArgs = _a.signinArgs;
    return function (WrappedComponent) {
        return (function (_super) {
            __extends(Authenticator, _super);
            function Authenticator(props) {
                var _this = _super.call(this, props) || this;
                _this.getUser = function () {
                    _this.userManager
                        .getUser()
                        .then(function (user) { return _this.storeUser(user); })
                        .catch(function () { return _this.setState({ isFetchingUser: false }); });
                };
                _this.storeUser = function (user) {
                    if (user) {
                        _this.setState(function (_a) {
                            var context = _a.context;
                            return ({
                                context: __assign(__assign({}, context), { user: user }),
                                isFetchingUser: false
                            });
                        });
                    }
                    else {
                        _this.setState(function (_a) {
                            var context = _a.context;
                            return ({
                                context: __assign(__assign({}, context), { user: null }),
                                isFetchingUser: false
                            });
                        });
                    }
                };
                _this.signOut = function () {
                    _this.userManager.removeUser();
                    _this.userManager.signoutRedirect();
                    _this.getUser();
                };
                _this.isValid = function () {
                    var user = _this.state.context.user;
                    return !!(user && !user.expired);
                };
                var um = userManager;
                _this.userManager = um;
                _this.signinArgs = signinArgs;
                _this.state = {
                    context: {
                        signOut: _this.signOut,
                        user: null,
                        userManager: um
                    },
                    isFetchingUser: true
                };
                return _this;
            }
            Authenticator.prototype.componentDidMount = function () {
                this.getUser();
            };
            Authenticator.prototype.render = function () {
                if (this.state.isFetchingUser) {
                    return placeholderComponent || null;
                }
                return this.isValid() ? (React.createElement(AuthenticatorContext.Provider, { value: this.state.context },
                    React.createElement(WrappedComponent, __assign({}, this.props)))) : (React.createElement(RedirectToAuth_1.default, { userManager: this.userManager, onSilentSuccess: this.storeUser, signinArgs: this.signinArgs }, placeholderComponent));
            };
            return Authenticator;
        }(React.Component));
    };
}
exports.makeAuthenticator = makeAuthenticator;
//# sourceMappingURL=index.js.map