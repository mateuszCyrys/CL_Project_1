import {connect} from "react-redux";
import Quotes from "../components/Quotes";
import {addQuote} from "../redux/actions";

const mapDispatch = (dispatch)=>({
    onQuoteAdd: (quote)=>dispatch(addQuote(quote))
})


export default connect(null,mapDispatch)(Quotes);