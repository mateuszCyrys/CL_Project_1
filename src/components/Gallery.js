import React from 'react';


class Gallery extends React.Component{

    handleClick = (idx,src) => {

        for (let i=0; i<this.props.photos.length; i++){
            if (i === idx){
                this.props.onImageAdd(src)
                return null
            }
        }
    } 

    render()
    {   
        return(<div>
                <div className="gallery">
                {this.props.photos.map((image,idx) => {return (<div key={idx} className = "clipped-border">
                <img key={idx} className = "hexagon" alt={image.tags} src={image.largeImageURL} onClick={() =>this.handleClick(idx,image.largeImageURL)}></img>
                </div>)})}
            </div>
            </div>)
    }
}

export default Gallery