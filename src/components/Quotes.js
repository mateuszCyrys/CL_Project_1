import React from 'react';


class Quotes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          quote: "",
          chosenQuote: "",
          font: "",
          fontSize: "",
          color: "",
          bold: ""
          }
      }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    chooseQuotes = e => {
        this.setState({chosenQuote: this.state.quote});
        this.props.onQuoteAdd(this.state.quote)
    }

    

      render(){
          return(<div>
                    <textarea type="textarea" name="quote" value={this.state.quote} onChange={this.handleChange} />
                    <button onClick={this.chooseQuotes}>source quote</button>
                </div>)
      }
}

export default Quotes