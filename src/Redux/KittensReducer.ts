import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type KittenType = {
    sliderArray: Array<string>
    name: string
    birthDate: string
    color: string
    sex:string
    youtube?:string
}

type InitialStateType = {
    kittens: Array<KittenType>
};

let initialState: InitialStateType = {
    kittens: [{
        sliderArray: [cat1, cat2, cat3, cat4], name: "Grammy Mur Old Race",
        birthDate: "25.06.2018", color: "Brown (Black) Spotted Tabby",
        sex:"male",youtube:"c5Ah6mz_t3k"
    },
    ]
};

const KittensReducer = (state = initialState, action: AppActionTypes): InitialStateType => {

    switch (action.type) {
        default:
            return state;
    }
};

type AppActionTypes = initializedSuccessActionType;
type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<void, AppStateType, unknown, AppActionTypes>
export const initializeApp = (): ThunkType => (dispatch, getState) => {

};

export default KittensReducer;