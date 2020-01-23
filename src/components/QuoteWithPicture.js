import React from 'react';
import interact from 'interactjs'
let q=0;
let w=0;


class QuoteWithPicture extends React.Component{

    haha = (event) => {interact('.drag')
        .resizable({
          // resize from all edges and corners
          edges: { left: true, right: true, bottom: true, top: true },
      
          modifiers: [
            // keep the edges inside the parent
            interact.modifiers.restrictEdges({
              outer: 'parent'
            }),
      
            // minimum size
            interact.modifiers.restrictSize({
              min: { width: 100, height: 50 }
            })
          ],
      
          inertia: true
        })
        .draggable({
    
          listeners: {
            start (event) {
              console.log(event.type, event.target)
            },
            move (event) {
              q += event.dx
              w += event.dy
        
              event.target.style.transform =
                `translate(${q}px, ${w}px)`
            },
          }
        })
        .on('resizemove', function (event) {
          var target = event.target
          var x = (parseFloat(target.getAttribute('data-x')) || 0)
          var y = (parseFloat(target.getAttribute('data-y')) || 0)
      
          // update the element's style
          target.style.width = event.rect.width + 'px'
          target.style.height = event.rect.height + 'px'
      
          // translate when resizing from top or left edges
          x += event.deltaRect.left
          y += event.deltaRect.top
      
          target.style.webkitTransform = target.style.transform =
              'translate(' + x + 'px,' + y + 'px)'
      
          target.setAttribute('data-x', x)
          target.setAttribute('data-y', y)
          //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
        })}


    render(){
        console.log(this.props)
        let style = {
            height: "200px",
            width: "200px"
        }
        let style2 = {
            overflowWrap: "break-word",
            //backgroundColor: "red",
            width: "100px",
            height: "100px"
        }
        
        return(
            <div>
                <div className="drag" style={style2} onClick={this.haha}>{this.props.quote}</div>
                <img style={style} src={this.props.image} alt = "main"></img>
            </div>
            )
    }
}

export default QuoteWithPicture
