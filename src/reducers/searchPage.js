import {searchPageConstants as _} from "../constants/searchPageConstants";

const initialState = {
    searchPhotos:[],
    isLoadingPhotos: false,
    isUploadFailed: false
}

export function searchPageReducer(state = initialState,action){
    switch (action.type) {
        case _.GET_SEARCH_PHOTOS_REQUEST:
            return {
                ...state,
                isLoadingPhotos: true
            }
        case _.GET_SEARCH_PHOTOS_SUCCESS:
            return {
                ...state,
                searchPhotos: state.searchPhotos.concat(action.payload),
                isLoadingPhotos: false
            }
        case _.GET_SEARCH_PHOTOS_FAILURE:
            return {
                ...state,
                isLoadingPhotos: false,
                isUploadFailed: true
            }
        case _.TOGGLE_LIKE:
            return {
                ...state,
                searchPhotos: state.searchPhotos.map((page) => {
                    return {
                        ...page,
                        photos: page.photos.map((photo) => {
                            return (photo.id === Number(action.payload)) ? {...photo, liked: !photo.liked} : photo
                        })
                    }
                })
            }

        default:
            return state;
    }

}