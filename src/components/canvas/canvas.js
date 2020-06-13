import React, { Component } from 'react'
import p5 from 'p5'
import Sidebar from '../sidebar/sidebar'

class Canvas extends Component{
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = { width: 0, height: 0 }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
      }
    
    Sketch = (p) => {
     
        p.setup = () => {
           
        }

        p.draw = () => {
            let cnv = p.createCanvas(0.75*this.state.width,this.state.height)
            cnv.position(this.state.width*0.25,0)
            p.background(245)


            let x_offset = this.state.width/44
            let y_offset = this.state.height/20
            for (var x = 0; x <this.state.width; x=x+x_offset){
                p.stroke(100)
                p.line(x,0,x,this.state.height)  
            }

            for (var y = 0; y <this.state.width; y=y+y_offset){
                p.stroke(100)
                p.line(0,y,this.state.width,y)  
            }
            
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
    
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
    
    render() {
        return (
            <div>
                <div ref={this.myRef}></div>
                <Sidebar/>
            </div>
        )
    }
  
}

export default Canvas 