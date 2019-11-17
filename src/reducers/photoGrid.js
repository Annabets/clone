import {photoGridConstants as _} from "../constants/photoGridConstants";

const initialState = {
    columns:[],
    modalPhoto: {},
    isModalOpen: false
}

export function photoGridReducer(state = initialState,action){
    switch (action.type) {
        case _.SET_COLUMNS:
            return{
                ...state,
                columns: action.payload
            }
        case _.SET_MODAL_OPEN_FLAG:
            return {
                ...state,
                isModalOpen: action.payload
            }
        case _.SET_MODAL_PHOTO:
            return {
                ...state,
                modalPhoto: action.payload
            }

        default:
            return state
    }
}