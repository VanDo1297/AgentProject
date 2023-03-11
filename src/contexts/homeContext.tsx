import React, {createContext, useReducer} from 'react';
import { IHistoryItem } from '../data/home';

interface HomeContextState {
    filterdHistoryItems: IHistoryItem[];
    historyItems: IHistoryItem[];
}
const initialState:HomeContextState = {
    filterdHistoryItems: [],
    historyItems:[]
};

interface HomeContextAction {
    type: string;
    filterdHistoryItems?: IHistoryItem[];
    historyItems?: IHistoryItem[];
}

export const GET_HISTORY:string = "GET_HISTORY";
export const FILTER_HISTORY:string = "FILTER_HISTORY";

const reducer = (state:HomeContextState, action:HomeContextAction) => {
    switch (action.type) {
        case GET_HISTORY:
            var newHistoryItems = state.historyItems
            if(action.historyItems){
                newHistoryItems = action.historyItems;
            }
            return {
                ...state,
                historyItems : newHistoryItems,
                filterdHistoryItems:newHistoryItems
            };
        case FILTER_HISTORY:
            let newFilterHistoryItems = action.filterdHistoryItems ? action.filterdHistoryItems : state.filterdHistoryItems;
            console.log(newFilterHistoryItems);
            return {
                ...state,
                filterdHistoryItems : newFilterHistoryItems,
            };
        default:
            return state;
    }
};
interface HomeContextType{
    state: HomeContextState,
    dispatch: React.Dispatch<HomeContextAction>
}

export const HomeContext = createContext<HomeContextType>({state:initialState,dispatch: () => null});
export const HomeContextProvider = (props:any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <HomeContext.Provider value={{state, dispatch}}>
            {props.children}
        </HomeContext.Provider>
    );
};