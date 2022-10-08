import { actionTypes } from "../constants/action-types";

export const setImages = (images) => {

    return {
        type:actionTypes.SET_IMAGES,
        payload:images
    }
}