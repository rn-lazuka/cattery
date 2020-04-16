import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";
import cat1 from "../assets/images/parentsPhotos/GrammyMur/1.jpg";
import cat2 from "../assets/images/parentsPhotos/GrammyMur/2.jpg";
import cat3 from "../assets/images/parentsPhotos/GrammyMur/3.jpg";
import cat4 from "../assets/images/parentsPhotos/GrammyMur/4.jpg";
import LucCat1 from "../assets/images/parentsPhotos/Lucius/1.jpg";
import LucCat2 from "../assets/images/parentsPhotos/Lucius/2.jpg";
import LucCat3 from "../assets/images/parentsPhotos/Lucius/3.jpg";
import Mist1 from "../assets/images/parentsPhotos/Mistery/1.jpg";
import Mist2 from "../assets/images/parentsPhotos/Mistery/2.jpg";
import Mist3 from "../assets/images/parentsPhotos/Mistery/3.jpg";
import Ferr1 from "../assets/images/parentsPhotos/Ferrari/1.jpg";
import Ferr2 from "../assets/images/parentsPhotos/Ferrari/2.jpg";
import Ferr3 from "../assets/images/parentsPhotos/Ferrari/3.jpg";
import Ferr4 from "../assets/images/parentsPhotos/Ferrari/4.jpg";
import Ferr5 from "../assets/images/parentsPhotos/Ferrari/5.jpg";
import Ferr6 from "../assets/images/parentsPhotos/Ferrari/6.jpg";
import Neph1 from "../assets/images/parentsPhotos/Nephertity/1.jpg";
import Neph2 from "../assets/images/parentsPhotos/Nephertity/2.jpg";
import Neph3 from "../assets/images/parentsPhotos/Nephertity/3.jpg";
import Prada1 from "../assets/images/parentsPhotos/Prada/1.jpg";
import Prada2 from "../assets/images/parentsPhotos/Prada/2.jpg";
import Prada3 from "../assets/images/parentsPhotos/Prada/3.jpg";



const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type ParentType = {
    sliderArray: Array<string>
    name: string
    birthDate: string
    color: string
    sex:string
    youtube?:string
}

type InitialStateType = {
    parents: Array<ParentType>
};



let initialState: InitialStateType = {
    parents: [{
        sliderArray: [cat1, cat2, cat3, cat4], name: "Grammy Mur Old Race",
        birthDate: "25.06.2018", color: "Brown (Black) Spotted Tabby",
        sex:"male",youtube:"c5Ah6mz_t3k"
    },{
        sliderArray: [LucCat1, LucCat2, LucCat3], name: "Paradiseapple Lucius",
        birthDate: "07.06.2019", color: "Seal lynx point",sex:"male"
    },{
        sliderArray: [Prada1, Prada2, Prada3,], name: "Sunhunters Prada",
        birthDate: "25.02.2019", color: "Brown (Black) Spotted Tabby",sex:"female"
    },{
        sliderArray: [Ferr1, Ferr2, Ferr3,Ferr4,Ferr5,Ferr6], name: "Sunhunters Ferrari",
        birthDate: "01.08.2019", color: "Brown (Black) Spotted Tabby",sex:"female"
    },{
        sliderArray: [Neph1, Neph2, Neph3], name: "Sunhunters Nephertity",
        birthDate: "30.05.2019", color: "Brown (Black) Spotted Tabby",sex:"female"
    },{
        sliderArray: [Mist1, Mist2, Mist3], name: "Miraclebengals Mistery",
        birthDate: "01.02.2017", color: "Brown (Black) Spotted Tabby",sex:"female"
    }
    ]
};

const ParentsReducer = (state = initialState, action: AppActionTypes): InitialStateType => {

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

export default ParentsReducer;