const ADD_IMAGE = "ADD_IMAGE";
const ADD_QUOTE = "ADD_QUOTE";

const addQuote = (quote)=>({type:ADD_QUOTE,payload:quote});
const addImage = (image)=>({type:ADD_IMAGE,payload:image});

export { ADD_IMAGE, ADD_QUOTE, addQuote, addImage };
