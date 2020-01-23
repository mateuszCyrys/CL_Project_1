import {combineReducers} from "redux"
import { ADD_QUOTE, ADD_IMAGE } from "./actions";


const Quote = (state="initial quote",action)=>{
    if(action.type === ADD_QUOTE){
        let temp = action.payload;
        return temp
    }
    return state;
}

const Image = (state="https://pixabay.com/get/54e5d2474d57ad14f6da8c7dda79367b153fdde05a506c48702872dc964ac05fb1_1280.jpg",action)=>{
    if(action.type===ADD_IMAGE){
        let temp = action.payload;
        return temp
    }
    return state;
}



export default combineReducers({
    Quote,
    Image
});
