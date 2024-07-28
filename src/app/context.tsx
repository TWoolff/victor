'use client';
import { State, AppContextType, Action } from '@/types/types';
import {createContext, useContext, ReactNode, useReducer} from 'react';

const initialState: State = {
    route: '/',
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_STATE':
            return { ...state, ...(action.payload as object) };
        case 'ROUTE_CHANGE':
            return { ...state, route: action.payload as string};
        default:
            return state;
    }
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export function useAppContext() {
    const context = useContext(AppContext);
    return context;
}
