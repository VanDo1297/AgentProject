import React, {createContext, useReducer} from 'react';
import { IColumnDataItem } from '../data/column';

interface ColumnContextState {
    data: IColumnDataItem[];
}
const initialState:ColumnContextState = {
    data: [],
};

interface ColumnContextAction {
    type: string;
    data?:IColumnDataItem[];
}

export const GET_COLUMN:string = "GET_COLUMN";

const reducer = (state:ColumnContextState, action:ColumnContextAction) => {
    switch (action.type) {
        case GET_COLUMN:
            var newData = state.data;
            if(action.data){
                newData = action.data;
            }
            return {
                ...state,
                data : newData,
            };
        default:
            return state;
    }
};
interface ColumnContextType{
    state: ColumnContextState,
    dispatch: React.Dispatch<ColumnContextAction>
}

export const ColumnContext = createContext<ColumnContextType>({state:initialState,dispatch: () => null});
export const ColumnContextProvider = (props:any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ColumnContext.Provider value={{state, dispatch}}>
            {props.children}
        </ColumnContext.Provider>
    );
};