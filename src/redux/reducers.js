import {combineReducers} from "redux"
import { ADD_TOPTEXT, ADD_IMAGE, ADD_MIDDLETEXT, ADD_BOTTOMTEXT } from "./actions";


const topText = (state="initial top text",action)=>{
    if(action.type === ADD_TOPTEXT){
        let temp = action.payload;
        return temp
    }
    return state;
}

const middleText = (state="initial middle text",action)=>{
    if(action.type === ADD_MIDDLETEXT){
        let temp = action.payload;
        return temp
    }
    return state;
}

const bottomText = (state="initial bottom text",action)=>{
    if(action.type === ADD_BOTTOMTEXT){
        let temp = action.payload;
        return temp
    }
    return state;
}

const Image = (state="Source image via button below",action)=>{
    if(action.type===ADD_IMAGE){
        let temp = action.payload;
        return temp
    }
    return state;
}



export default combineReducers({
    topText,
    bottomText,
    middleText,
    Image
});
