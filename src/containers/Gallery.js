import {connect} from "react-redux";
import Gallery from "../components/Gallery";
import {addImage} from "../redux/actions";

const mapDispatch = (dispatch)=>({
    onImageAdd: (quote)=>dispatch(addImage(quote))
})


export default connect(null,mapDispatch)(Gallery);