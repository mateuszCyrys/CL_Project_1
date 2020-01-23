import {connect} from "react-redux";
import QuoteWithPicture from "../components/QuoteWithPicture";


const mapState = (state)=>({
    quote: state.Quote,
    image: state.Image
})

export default connect(mapState,null)(QuoteWithPicture);