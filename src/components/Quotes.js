import React from 'react';


class Quotes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          topText: "",
          middleText: "",
          bottomText: "",
          }
      }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    addTopText = e => {
        this.props.addTopText(this.state.topText)
    }

    addMiddleText = e => {
        this.props.addMiddleText(this.state.middleText)
    }

    addBottomText = e => {
        this.props.addBottomText(this.state.bottomText)
    }

    

      render(){
         
          return(<div className="addText box-wrap">
                    <div className="textButton1">
                        <textarea className="textArea1 box" type="textarea" name="topText" value={this.state.quote1} onChange={this.handleChange} />
                        <button className="button" onClick={this.addTopText}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">add top text</span>
                        </button>
                     </div>
                    <div className="textButton2">
                        <textarea className="textArea2 box" type="textarea" name="middleText" value={this.state.quote2} onChange={this.handleChange} />
                        <button className="button" onClick={this.addMiddleText}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">add middle text</span>
                        </button>
                     </div>
                    <div className="textButton3">
                        <textarea className="textArea3 box" type="textarea" name="bottomText" value={this.state.quote3} onChange={this.handleChange} />
                        <button className="button" onClick={this.addBottomText}>
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">add bottom text</span>
                        </button>
                    </div>
                </div>)
      }
}

export default Quotes