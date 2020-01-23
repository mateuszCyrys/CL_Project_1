import React from 'react';
import Gallery from '../containers/Gallery';
import QuoteWithPicture from '../containers/QuoteWithPicture'

class Picture extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          category: "Category",
          photos: []
          }
      }

    handleCategoryChange = e => {
        this.setState({category: e.target.value});
    }  

    handleClick = () =>{
        fetch(`https://pixabay.com/api/?key=15003591-7c48b7f2bd626d7b491fb08d9&q=${this.state.category}`)
            .then(resp =>{
                if(resp.ok){
                    return resp.json();
                }
                else {
                    throw new Error('blad');
                }
                
            })
            .then(questions=>{
                console.log(questions)
                this.setState(
                    {photos: questions.hits}
                )
            })
       }

    render(){
        return(
            <div>
            <input type="text" value={this.state.category} onChange={this.handleCategoryChange} />
            <button onClick={this.handleClick}>Source the picture</button>
            <QuoteWithPicture/>
            <Gallery photos={this.state.photos} />   
            
            </div>
        )
    }
}

export default Picture

// 