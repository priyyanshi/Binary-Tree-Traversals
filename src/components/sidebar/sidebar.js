import React, { Component } from 'react'
import Styles from './sidebar.module.css'
import Search from '../definitions/binary-search'
import Graph from '../definitions/graph'
import p5 from 'p5'
import {BSTbuttons, GRAbuttons} from './buttons'

function EachPage(props) {

    return (
        <div>
            <button onClick={()=> props.handleDisplay(props)} className={Styles.eachPage}>
                {props.type} {props.val}
            </button>
        </div>
    ) 
}

var temp = new Search()
temp.insert(60)
temp.insert(30)
temp.insert(90)
temp.insert(75)
temp.insert(115)
temp.insert(7)
temp.insert(20)
temp.insert(40)
temp.insert(56)
temp.insert(35)
temp.insert(43)
temp.insert(58)
temp.insert(65)
temp.insert(72)
temp.insert(105)
temp.insert(117)
temp.insert(125)


class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            SearchTree: [temp], 
            Graph: [],
            index: 0,
            type: 'Binary Search Tree',
            width: 0, 
            height: 0, 
            showBST: true,
            showGRA: false, 
            go: true,
        }
        
        this.myRef = React.createRef()
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.addSearchTree = this.addSearchTree.bind(this)
        this.addGraph = this.addGraph.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
    }

    Sketch = (p) => {
        p.setup = () => {}

        p.draw = () => {
            p.background(0,0,0,0)
            var pos =  [[16/44*this.state.width,(1/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [8/44*this.state.width,(3/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [24/44*this.state.width,(3/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [4/44*this.state.width,(5/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [12/44*this.state.width,(5/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [20/44*this.state.width,(5/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [28/44*this.state.width,(5/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [2/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [6/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [10/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [14/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [18/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [22/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [26/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [30/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [1/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [3/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [5/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [7/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [9/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [11/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [13/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [15/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [17/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [19/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [21/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [23/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [25/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [27/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [29/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [31/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],]

            let x_mod = this.state.width/44
            let y_mod = this.state.height/20
            var lines = [[],
                        [9*x_mod, 2*y_mod, 9*x_mod, 3*y_mod, 9*x_mod, 2*y_mod, 16*x_mod, 2*y_mod],
                        [24*x_mod, 2*y_mod, 24*x_mod, 3*y_mod, 17*x_mod, 2*y_mod, 24*x_mod, 2*y_mod],
                        [5*x_mod, 4*y_mod, 5*x_mod, 5*y_mod, 5*x_mod, 4*y_mod, 8*x_mod, 4*y_mod],
                        [12*x_mod, 4*y_mod, 12*x_mod, 5*y_mod, 9*x_mod, 4*y_mod, 12*x_mod, 4*y_mod],
                        [21*x_mod, 4*y_mod, 21*x_mod, 5*y_mod, 21*x_mod, 4*y_mod, 24*x_mod, 4*y_mod],
                        [28*x_mod, 4*y_mod, 28*x_mod, 5*y_mod, 25*x_mod, 4*y_mod, 28*x_mod, 4*y_mod],
                        [3*x_mod, 6*y_mod, 3*x_mod, 7*y_mod, 3*x_mod, 6*y_mod, 4*x_mod, 6*y_mod],
                        [6*x_mod, 6*y_mod, 6*x_mod, 7*y_mod, 5*x_mod, 6*y_mod, 6*x_mod, 6*y_mod],
                        [11*x_mod, 6*y_mod, 11*x_mod, 7*y_mod, 11*x_mod, 6*y_mod, 12*x_mod, 6*y_mod],
                        [14*x_mod, 6*y_mod, 14*x_mod, 7*y_mod, 13*x_mod, 6*y_mod, 14*x_mod, 6*y_mod],
                        [19*x_mod, 6*y_mod, 19*x_mod, 7*y_mod, 19*x_mod, 6*y_mod, 20*x_mod, 6*y_mod],
                        [22*x_mod, 6*y_mod, 22*x_mod, 7*y_mod, 22*x_mod, 6*y_mod, 21*x_mod, 6*y_mod],
                        [27*x_mod, 6*y_mod, 27*x_mod, 7*y_mod, 27*x_mod, 6*y_mod, 28*x_mod, 6*y_mod],
                        [30*x_mod, 6*y_mod, 30*x_mod, 7*y_mod, 29*x_mod, 6*y_mod, 30*x_mod, 6*y_mod],
                        [2*x_mod, 8*y_mod, 2*x_mod, 10*y_mod],
                        [3*x_mod, 8*y_mod, 3*x_mod, 10*y_mod],
                        [6*x_mod, 8*y_mod, 6*x_mod, 10*y_mod],
                        [7*x_mod, 8*y_mod, 7*x_mod, 10*y_mod],
                        [10*x_mod, 8*y_mod, 10*x_mod, 9*y_mod],
                        [11*x_mod, 8*y_mod, 11*x_mod, 9*y_mod],
                        [14*x_mod, 8*y_mod, 14*x_mod, 9*y_mod],
                        [15*x_mod, 8*y_mod, 15*x_mod, 9*y_mod],
                        [18*x_mod, 8*y_mod, 18*x_mod, 9*y_mod],
                        [19*x_mod, 8*y_mod, 19*x_mod, 9*y_mod],
                        [22*x_mod, 8*y_mod, 22*x_mod, 9*y_mod],
                        [23*x_mod, 8*y_mod, 23*x_mod, 9*y_mod],
                        [26*x_mod, 8*y_mod, 26*x_mod, 9*y_mod],
                        [27*x_mod, 8*y_mod, 27*x_mod, 9*y_mod],
                        [30*x_mod, 8*y_mod, 30*x_mod, 9*y_mod],
                        [31*x_mod, 8*y_mod, 31*x_mod, 9*y_mod]]
            
            let cnv = p.createCanvas(0.75*this.state.width,this.state.height)
            cnv.position(this.state.width*0.25,0)
            
            if (this.state.type === 'Binary Search Tree') {
                this.allTraversals(p)
                let level = this.state.SearchTree[this.state.index].levelorder()
                for (let i=0; i<level.length; i++) {
                    if (level[i] !== null) {
                        p.push()
                        p.strokeWeight(4)
                        p.stroke(65,65,65,255)
                        p.fill(65,65,65)
                        p.rect(pos[i][0],pos[i][1],pos[i][2],pos[i][3])
                        p.fill(255)
                        p.textSize(this.state.width/100)
                        p.textAlign(p.CENTER,p.CENTER)
                        p.text(level[i],pos[i][0] + 1/88*this.state.width,pos[i][1]+(1/40)*this.state.height)
                        p.pop()

                        for (let j = 0; j <= lines[i].length+1; j+=4) {
                            p.push()
                            p.strokeWeight(4)
                            p.stroke(65,65,65,255)
                            p.line(lines[i][j], lines[i][j+1], lines[i][j+2], lines[i][j+3])
                            p.pop()
                        }
                    }
                }
            } else if (this.state.type === 'Graph') {
                p.graphDisplay()
            }     
        }

        p.mousePressed = () => {
            if (this.state.go === false) {
                let info = this.state.Graph[this.state.index].state.newNode[0] 
                this.state.Graph[this.state.index].state.newNode.splice(0,1)
                let x_coor = this.getclosestX(p.mouseX)
                let y_coor = this.getclosestY(p.mouseY)
                this.state.Graph[this.state.index].state.nodes.push([info, x_coor, y_coor]) 
                this.setState({go: true})
            }   
        }

        p.graphDisplay = () => {
            if (this.state.go === false) {
                p.fill(200,100,0)
                p.rect(p.mouseX, p.mouseY, this.state.width/44, this.state.height/20)
            }
            let graphNodes = this.state.Graph[this.state.index].state.nodes
            for (var k=0; k< graphNodes.length; k++) {
                p.push()
                p.fill(200,100,0)
                p.rectMode(p.CENTER)
                p.rect(graphNodes[k][1],graphNodes[k][2],this.state.width/44,this.state.height/20)
                p.fill(255)
                p.textSize(this.state.width/65)
                p.textAlign(p.CENTER,p.CENTER)
                p.text(graphNodes[k][0],graphNodes[k][1] ,graphNodes[k][2])
                p.pop()
            }
        }
    }

    getclosestX(x) {
        x = Math.ceil(x / (this.state.width/44))
        x = x*(this.state.width/44) + (this.state.width/88)
        return x
    }

    getclosestY(y) {
        y = Math.ceil(y / (this.state.height/20))
        y = y*(this.state.height/20)+(this.state.height/40)
        return y
    }

    allTraversals(p) {
        p.fill(245)
        p.textSize(this.state.width/100)
        p.textAlign(p.CENTER,p.CENTER)
        p.rect(2/88*this.state.width,(11/20)*this.state.height,this.state.width*(12/172), this.state.height/20)
        p.rect(2/88*this.state.width,(14/20)*this.state.height,this.state.width*(12/172), this.state.height/20)
        p.rect(2/88*this.state.width,(17/20)*this.state.height,this.state.width*(12/172), this.state.height/20)
        p.fill(25)
        p.text('Preorder:',(10/172)*this.state.width,(23/40)*this.state.height)
        p.text('Postorder:',(10/172)*this.state.width,(29/40)*this.state.height)
        p.text('Inorder:',(10/172)*this.state.width,(35/40)*this.state.height)

        let prearray = []
        let postarray = []
        let inarray = []
        let tree = this.state.SearchTree[this.state.index]
        tree.preorder(tree.root, prearray)
        tree.postorder(tree.root, postarray)
        tree.inorder(tree.root, inarray)
        
        for (let i=0; i< prearray.length; i++) {
            p.fill(0)
            p.rect((1+i)/44*this.state.width,(12/20)*this.state.height,this.state.width*(1/44), this.state.height/20)
            p.rect((1+i)/44*this.state.width,(15/20)*this.state.height,this.state.width*(1/44), this.state.height/20)
            p.rect((1+i)/44*this.state.width,(18/20)*this.state.height,this.state.width*(1/44), this.state.height/20)
            p.fill(255)
            p.text(prearray[i],((3+i*2)/88)*this.state.width,(25/40)*this.state.height)
            p.text(postarray[i],((3+i*2)/88)*this.state.width,(31/40)*this.state.height)
            p.text(inarray[i],((3+i*2)/88)*this.state.width,(37/40)*this.state.height)
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

    handleDisplay(props) {
        this.setState({type: props.type})
        this.setState({index: props.val})
        if (props.type === 'Binary Search Tree') {
            this.setState({showBST: true, showGRA: false})
        } else if (props.type === 'Graph') {
            this.setState({showBST: false, showGRA: true})
        }
    }

    addSearchTree() {
        this.setState(prevState => {
            var tree = prevState.SearchTree 
            let newTree = new Search()
            tree.push(newTree)
            return {
                SearchTree: tree 
            } 
        })
    }

    addGraph() {
        this.setState(prevState => {
            var graph = prevState.Graph 
            let newGraph = new Graph()
            graph.push(newGraph)
            return {
                Graph: graph 
            } 
        })
    }

    render() {
        let one = 0
        // let three = 0
        var SearchComponents = this.state.SearchTree.map(tree => <EachPage type="Binary Search Tree" key={tree.state.id} val={one++} handleDisplay={this.handleDisplay}/>)
        // var GraphComponents = this.state.Graph.map(graph => <EachPage type="Graph" key={graph.state.id} val={three++} handleDisplay={this.handleDisplay}/>)

        return (
            <div>
                <div className={Styles.dropdown}>
                    <button className={Styles.dropbtn}>+ Modules</button>
                    <div className={Styles.dropdownContent}>
                        <button onClick={this.addSearchTree}>+ Binary Search Tree</button>
                        {/* <button onClick={this.addGraph}>+ Graphs</button> */}
                    </div>
                </div>
                <div className={Styles.scroll}>
                    {SearchComponents}
                    {/* {GraphComponents} */}
                </div>
                <div className={Styles.buttonsPanel}>
                    <BSTbuttons state={this.state} />
                    {/* <GRAbuttons state={this.state} /> */}
                </div>
                
            </div>
        )
    }
    
}

export default Sidebar