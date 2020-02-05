import {connect} from "react-redux";
import QuoteWithPicture from "../components/QuoteWithPicture";


const mapState = (state)=>({
    topText: state.topText,
    middleText: state.middleText,
    bottomText: state.bottomText,
    image: state.Image
})

export default connect(mapState,null)(QuoteWithPicture);