import React, {createContext, useReducer} from 'react';
import { IDairyItem, IExcersiceItem } from '../data/myRecords';

interface RecordContextState {
    exercises: IExcersiceItem[];
    diarys: IDairyItem[]
}
const initialState:RecordContextState = {
    exercises: [],
    diarys:[]
};

interface RecordContextAction {
    type: string;
    exercises?:IExcersiceItem[];
    diarys?:IDairyItem[];
}

export const GET_EXERCIES:string = "GET_EXERCIES";
export const GET_DIARYS:string = "GET_DIARYS";

const reducer = (state:RecordContextState, action:RecordContextAction) => {
    switch (action.type) {
        case GET_EXERCIES:
            var newExercises = state.exercises;
            if(action.exercises){
                newExercises = action.exercises;
            }
            return {
                ...state,
                exercises : newExercises,
            };
        case GET_DIARYS:
            var newDiarys = state.diarys;
            if(action.diarys){
                newDiarys = action.diarys;
            }
            return {
                ...state,
                diarys : newDiarys,
            };
        default:
            return state;
    }
};
interface RecordContextType{
    state: RecordContextState,
    dispatch: React.Dispatch<RecordContextAction>
}

export const RecordContext = createContext<RecordContextType>({state:initialState,dispatch: () => null});
export const RecordContextProvider = (props:any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <RecordContext.Provider value={{state, dispatch}}>
            {props.children}
        </RecordContext.Provider>
    );
};