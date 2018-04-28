// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

export type ReduxInitAction = { type: "@@INIT" };

export type State = {};

export type Action = ReduxInitAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
