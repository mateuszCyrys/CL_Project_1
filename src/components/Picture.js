import React from 'react';
import Gallery from '../containers/Gallery';
import QuoteWithPicture from '../containers/QuoteWithPicture'
import htmlToImage from 'html-to-image';

class Picture extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          category: "Category",
          photos: []
          }
      }

    handleClick = () =>{
        fetch("https://api.imgflip.com/get_memes")
            .then(resp =>{
                if(resp.ok){
                    return resp.json();
                }
                else {
                    throw new Error('blad');
                }
                
            })
            .then(questions=>{
                let generateRan = () =>{
                    var max = 99;
                    var random = [];
                    for(var i = 0;i<24 ; i++){
                        var temp = Math.floor(Math.random()*max);
                        if(random.indexOf(temp) === -1){
                            random.push(temp);
                        }
                        else
                         i--;
                    }
                    return random
                }

                let numbers = generateRan()

                let pictures = []
                for (let i=0; i<24; i++){

                pictures.push(questions.data.memes[numbers[i]])
                
                
                }
                
                this.setState(
                    {photos: pictures}
                )
            })
       }

    savePicture = () =>htmlToImage.toJpeg(document.getElementById('savepicture'), { style: {fontFamily: "Bangers"} })
       .then(function (dataUrl) {
         var link = document.createElement('a');
         link.download = 'my-image-name.jpeg';
         link.href = dataUrl;
         link.click();
       });

    render(){
        
   
        return(
            <>
            <div className="addImage">
                <button className="button" onClick={this.handleClick}>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Source the picture</span>
                </button>
                <button className="button" onClick={this.savePicture}>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Save the picture</span>
                </button>   
            </div>
            <QuoteWithPicture/>
            <Gallery photos={this.state.photos} />   
            
            </>
        )
    }
}

export default Picture
