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
        if (this.props.photos.length < 5){
            return(<div className="emptyGallery"></div>)
        }
        else{
            return(
                <ul className="gallery">
                    {this.props.photos.map((image,idx) => {return (<li key={idx} className = "clidpped-border">
                    <img key={idx} className = "hexdagon" alt={"random mem"} src={image.url} onClick={() =>this.handleClick(idx,image.url)}></img>
                    </li>)})}
                </ul>
            )
        }
    }
}

export default Gallery