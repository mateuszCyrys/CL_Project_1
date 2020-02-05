import {connect} from "react-redux";
import Quotes from "../components/Quotes";
import {addTopText,addMiddleText,addBottomText} from "../redux/actions";

const mapDispatch = (dispatch)=>({
    addTopText: (text)=>dispatch(addTopText(text)),
    addMiddleText: (text)=>dispatch(addMiddleText(text)),
    addBottomText: (text)=>dispatch(addBottomText(text))
})


export default connect(null,mapDispatch)(Quotes);