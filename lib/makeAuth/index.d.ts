import * as React from 'react';
import { User, UserManager } from 'oidc-client';
export interface IAuthenticatorContext {
    signOut: () => void;
    user: User | null;
    userManager: UserManager | null;
}
declare const AuthenticatorContext: React.Context<IAuthenticatorContext>;
export interface IAuthenticatorState {
    isFetchingUser: boolean;
    context: {
        signOut: () => void;
        user: User | null;
        userManager: UserManager;
    };
}
export interface IMakeAuthenticatorParams {
    placeholderComponent?: React.ReactNode;
    userManager?: UserManager;
    signinArgs?: any;
}
declare function makeAuthenticator({ userManager, placeholderComponent, signinArgs }: IMakeAuthenticatorParams): <Props extends {}>(WrappedComponent: React.ComponentType<Props>) => {
    new (props: Props): {
        userManager: UserManager;
        signinArgs: any;
        componentDidMount(): void;
        getUser: () => void;
        storeUser: (user: User) => void;
        signOut: () => void;
        isValid: () => boolean;
        render(): {};
        context: any;
        setState<K extends "isFetchingUser" | "context">(state: IAuthenticatorState | ((prevState: Readonly<IAuthenticatorState>, props: Readonly<Props>) => IAuthenticatorState | Pick<IAuthenticatorState, K>) | Pick<IAuthenticatorState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<Props> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<IAuthenticatorState>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<IAuthenticatorState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<IAuthenticatorState>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<IAuthenticatorState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<IAuthenticatorState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<IAuthenticatorState>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export { AuthenticatorContext, makeAuthenticator };
