import React from 'react';
import interact from 'interactjs'



let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
let x3 = 0
let y3 = 0


class QuoteWithPicture extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fontSize: [24,24,24],
      fontColor: ["black","black","black"],
      fontType: ["Dancing Script","Dancing Script","Dancing Script"],
      fonts: ["Bangers","Alegreya","Vollkorn","Cairo","Spectral","Arial"],
      background: ["no","no","no"],
      backgroundOptions: ["yes","no"],
      backgroundColor: ["","",""],
      text: ["TOP","MIDDLE","BOTTOM"]
      }
  }

  dragAndResize1 = (event) => {interact('.dragAndResize1')
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
        min: { width: 50, height: 50 }
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
        x1 += event.dx
        y1 += event.dy
  
        event.target.style.transform =
          `translate(${x1}px, ${y1}px)`
      },
    }
  })
  .on('resizemove', function (event) {
    var target = event.target
    var q = (parseFloat(target.getAttribute('data-x')) )
    var w = (parseFloat(target.getAttribute('data-y')) )

    // update the element's style
    target.style.width = event.rect.width + 'px'
    target.style.height = event.rect.height + 'px'

    // translate when resizing from top or left edges
    q += event.deltaRect.left
    w += event.deltaRect.top

    target.style.webkitTransform = target.style.transform =
        'translate(' + q + 'px,' + w + 'px)'

    target.setAttribute('data-x', q)
    target.setAttribute('data-y', w)
    //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
  })}

  dragAndResize2 = (event) => {interact('.dragAndResize2')
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
        min: { width: 50, height: 50 }
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
        x2 += event.dx
        y2 += event.dy
  
        event.target.style.transform =
          `translate(${x2}px, ${y2}px)`
      },
    }
  })
  .on('resizemove', function (event) {
    var target = event.target
    var q = (parseFloat(target.getAttribute('data-x')) )
    var w = (parseFloat(target.getAttribute('data-y')) )

    // update the element's style
    target.style.width = event.rect.width + 'px'
    target.style.height = event.rect.height + 'px'

    // translate when resizing from top or left edges
    q += event.deltaRect.left
    w += event.deltaRect.top

    target.style.webkitTransform = target.style.transform =
        'translate(' + q + 'px,' + w + 'px)'

    target.setAttribute('data-x', q)
    target.setAttribute('data-y', w)
    //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
  })}

  dragAndResize3 = (event) => {interact('.dragAndResize3')
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
        min: { width: 50, height: 50 }
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
        x3 += event.dx
        y3 += event.dy
  
        event.target.style.transform =
          `translate(${x3}px, ${y3}px)`
      },
    }
  })
  .on('resizemove', function (event) {
    var target = event.target
    var q = (parseFloat(target.getAttribute('data-x')) )
    var w = (parseFloat(target.getAttribute('data-y')) )

    // update the element's style
    target.style.width = event.rect.width + 'px'
    target.style.height = event.rect.height + 'px'

    // translate when resizing from top or left edges
    q += event.deltaRect.left
    w += event.deltaRect.top

    target.style.webkitTransform = target.style.transform =
        'translate(' + q + 'px,' + w + 'px)'

    target.setAttribute('data-x', q)
    target.setAttribute('data-y', w)
    //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
  })}

  handleChange = (i,e) => {
    if (e.target.name === "fontSize"){
      let a = e.target.value
      this.setState( state =>{
        let fakeState = [...state.fontSize]
        fakeState[i-1] = a
        return {fontSize :fakeState}
    })};
    if (e.target.name === "fontColor"){
      let a = e.target.value
      this.setState( state =>{
        let fakeState = [...state.fontColor]
        fakeState[i-1] = a
        return {fontColor :fakeState}
    })};
    if (e.target.name === "font"){
       let a = e.target.value
       this.setState( state =>{
         let fakeState = [...state.fontType]
         fakeState[i-1] = a
         return {fontType :fakeState}
    })};
    if (e.target.name === "backgroundText"){
      let a = e.target.value
      this.setState( state =>{
        let fakeState = [...state.background]
        fakeState[i-1] = a
        return {background :fakeState}
    })
      
      if (a==="no"){      
        this.setState( state =>{
        let fakeState = [...state.backgroundColor]
        fakeState[i-1] = "rgba(0,0,0,0)"
        return {backgroundColor : fakeState}
    })}
    };  
    if (e.target.name === "backgroundColor"){
      let a = e.target.value
      this.setState( state =>{
        let fakeState = [...state.backgroundColor]
        fakeState[i-1] = a
        return {backgroundColor :fakeState}
    })};
}

background = (i) =>{
  if (this.state.background[i-1]==="yes"){
    return (<input type="color" name="backgroundColor" onChange={e => this.handleChange(i,e)}></input> )
  }
}

image = () => {

  if (this.props.image === "Source image via button below"){
    return(
      <div className="initialImage"><h3>{this.props.image}</h3></div>
    )
  }
  else{
    return(<img className="mainPicture" id="capture" src={this.props.image} alt = "main"></img>)
  }
}

editor = (i) => {
  return(
<div className="textStyles">
  <h1>{this.state.text[i-1]}</h1>
  <div className="fontColor">
    <input type="color" name="fontColor" onChange={e => this.handleChange(i,e)}></input>
    <label htmlFor="fontColor" ><h3>Text color</h3></label>
  </div>
  <div className="range"><h3>Text size</h3></div>
  <input  type="range" name="fontSize"  min="5" max="72" onChange={e => this.handleChange(i,e)}></input> 
  <h3>{this.state.fontSize[i-1]} px</h3>
  <div className="select">
    <select className="dropdown" name="font"  onChange={e => this.handleChange(i,e)}>
      <option selected disabled>Font style</option>
      {this.state.fonts.map((e,idx) =>{return <option key={idx} className="icon-large" value={e}>{e}</option>})}
    </select>
  </div> 
  <h2>Background color</h2>
  <div className="select">  
    <select name="backgroundText" value={this.state.background[i-1]} onChange={e => this.handleChange(i,e)}>
      {this.state.backgroundOptions.map((e,idx) =>{return <option key={idx} value={e}>{e}</option>})}
    </select>   
  </div>
  <div>{this.background(i)}</div>     
</div>)
}


    render(){
        
    let topText = {
            overflowWrap: "break-word",
            fontSize: this.state.fontSize[0]+'px',
            color: this.state.fontColor[0],
            fontFamily: this.state.fontType[0],
            backgroundColor:this.state.backgroundColor[0],
         
    }

    let middleText = {
          overflowWrap: "break-word",
          fontSize: this.state.fontSize[1]+'px',
          color: this.state.fontColor[1],
          fontFamily: this.state.fontType[1],
          backgroundColor:this.state.backgroundColor[1],
          
    }

    let bottomText = {
        overflowWrap: "break-word",
        fontSize: this.state.fontSize[2]+'px',
        color: this.state.fontColor[2],
        fontFamily: this.state.fontType[2],
        backgroundColor:this.state.backgroundColor[2],
    }
        
        return(
          <>
            <div className="imageWithText" >
              <div id='savepicture' className="texts">
                {this.image()}
                <div className="box-wrap">
                  <div className="dragAndResize1 div" style={topText} onMouseOver={this.dragAndResize1} dangerouslySetInnerHTML={{ __html: this.props.topText.replace(/(\r\n|\n|\r)/gm, "<br />")}}></div>
                  <div className="dragAndResize2 div" style={middleText} onMouseOver={this.dragAndResize2} dangerouslySetInnerHTML={{ __html: this.props.middleText.replace(/(\r\n|\n|\r)/gm, "<br />")}}></div>
                  <div className="dragAndResize3 div" style={bottomText} onMouseOver={this.dragAndResize3} dangerouslySetInnerHTML={{ __html: this.props.bottomText.replace(/(\r\n|\n|\r)/gm, "<br />")}}></div>
                  </div>             
               </div>  
            </div>
            <div className="wrap-collabsible">
              <input id="collapsible" className="toggle" type="checkbox"></input>
              <label htmlFor="collapsible" className="lbl-toggle">More Info</label>
   
              <div className="collapsible-content">
                <div className=" editor content-inner">
                  {this.editor(1)}
                  {this.editor(2)}
                  {this.editor(3)}  
                </div> 
              </div> 
                 
            </div>
          </>
            )
    }
}

export default QuoteWithPicture

// <div className="drag" style={style2} onClick={this.haha} dangerouslySetInnerHTML={{ __html: this.props.topText.replace(/(\r\n|\n|\r)/gm, "<br />")}}></div>

//<textarea readOnly="true" type="textarea" name="quote" value={this.state.quote} onChange={this.handleChange} />
// <div className="drag" style={style2} onClick={this.haha} dangerouslySetInnerHTML={{ __html: this.props.quote.replace(/(\r\n|\n|\r)/gm, "<br />")}}></div>