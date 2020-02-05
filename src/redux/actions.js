const ADD_IMAGE = "ADD_IMAGE";
const ADD_TOPTEXT = "ADD_TOPTEXT";
const ADD_MIDDLETEXT = "ADD_MIDDLETEXT";
const ADD_BOTTOMTEXT = "ADD_BOTTOMTEXT";

const addTopText = (text)=>({type:ADD_TOPTEXT,payload:text});
const addMiddleText = (text)=>({type:ADD_MIDDLETEXT,payload:text});
const addBottomText = (text)=>({type:ADD_BOTTOMTEXT,payload:text});
const addImage = (image)=>({type:ADD_IMAGE,payload:image});

export { ADD_IMAGE, ADD_TOPTEXT,ADD_MIDDLETEXT,ADD_BOTTOMTEXT, addTopText, addImage, addMiddleText, addBottomText};
