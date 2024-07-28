import { Dispatch } from "react";

export type ErrorState = string | null;

export type State = {
    route: string;
    error?: ErrorState;
};

export type Action = {
    type: 'SET_STATE' | 'ROUTE_CHANGE';
    payload?: Partial<State> | string;
};


export type AppContextType = {
    state: State;
    dispatch: Dispatch<Action>;
}