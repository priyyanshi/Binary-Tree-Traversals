import React, { Component } from 'react'
import Styles from './sidebar.module.css'
import Search from '../datastructures/binary-search'
import p5 from 'p5'
import {BSTbuttons, BTbuttons, GRAbuttons} from './buttons'

function EachPage(props) {

    return (
        <div>
            <button onClick={()=> props.handleDisplay(props)} className={Styles.eachPage}>
                {props.type} {props.val}
            </button>
        </div>
    ) 
}

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            SearchTree: [], 
            BinaryTree: [], 
            Graph: [],
            index: 0,
            type: '',
            width: 0, 
            height: 0, 
            showBST: false,
            showBT: false,
            showGRA: false
        }
        
        this.myRef = React.createRef()
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
        this.addSearchTree = this.addSearchTree.bind(this)
        this.addBinaryTree = this.addBinaryTree.bind(this)
        this.addGraph = this.addGraph.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
    }

    Sketch = (p) => {
        
        p.setup = () => {
           
        }

        p.draw = () => {
            var pos =  [[16/44*this.state.width,(3/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [8/44*this.state.width,(5/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [24/44*this.state.width,(5/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [4/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [12/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [20/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [28/44*this.state.width,(7/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [2/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [6/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [10/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [14/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [18/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [22/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [26/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [30/44*this.state.width,(9/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [1/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [3/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [5/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [7/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [9/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [11/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [13/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [15/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [17/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [19/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [21/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [23/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [25/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [27/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [29/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],
                        [31/44*this.state.width,(11/20)*this.state.height,this.state.width/44, this.state.height/20],]

            let cnv = p.createCanvas(0.75*this.state.width,this.state.height)
            cnv.position(this.state.width*0.25,0)
            
            if (this.state.type === 'BST') {
                for (var i=0; i<pos.length; i++) {
                    p.fill(55,90,88)
                    p.rect(pos[i][0],pos[i][1],pos[i][2],pos[i][3])
                }
            } else if (this.state.type === 'Binary'){
                for (var j=0; j<pos.length; j++) {
                    p.fill(100,50,55)
                    p.rect(pos[j][0],pos[j][1],pos[j][2],pos[j][3])
                }
            } else if (this.state.type === 'Graph') {
                p.fill(0,0,255)
                p.triangle(40,20,60,45,40,85)
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

    handleDisplay(props) {
        this.setState({type: props.type})
        this.setState({index: props.val})
        if (props.type === 'BST') {
            this.setState({showBST: true, showBT : false, showGRA: false})
        } else if (props.type === 'Binary') {
            this.setState({showBST: false, showBT : true, showGRA: false})
        } else if (props.type === 'Graph') {
            this.setState({showBST: false, showBT : false, showGRA: true})
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

    addBinaryTree() {
        this.setState(prevState => {
            var tree = prevState.BinaryTree 
            let newTree = new Search()
            tree.push(newTree)
            return {
                BinaryTree : tree 
            } 
        })
    }

    addGraph() {
        this.setState(prevState => {
            var graph = prevState.Graph 
            let newGraph = new Search()
            graph.push(newGraph)
            return {
                Graph: graph 
            } 
        })
    }

    render() {
        let one = 0
        let two = 0 
        let three = 0
        var SearchComponents = this.state.SearchTree.map(tree => <EachPage type="BST" key={tree.state.id} val={one++} handleDisplay={this.handleDisplay}/>)
        var BinaryComponents = this.state.BinaryTree.map(tree => <EachPage type="Binary" key={tree.state.id} val={two++} handleDisplay={this.handleDisplay}/>)
        var GraphComponents = this.state.Graph.map(graph => <EachPage type="Graph" key={graph.state.id} val={three++} handleDisplay={this.handleDisplay}/>)

        return (
            <div>
                <div className={Styles.dropdown}>
                    <button className={Styles.dropbtn}>+ Data Structures</button>
                    <div className={Styles.dropdownContent}>
                        <button onClick={this.addSearchTree}>+ Binary Search Tree</button>
                        <button onClick={this.addBinaryTree}>+ Binary Tree</button>
                        <button onClick={this.addGraph}>+ Graphs</button>
                    </div>
                </div>
                <div className={Styles.scroll}>
                    {SearchComponents}
                    {BinaryComponents}
                    {GraphComponents}
                </div>
                <div>
                    <BSTbuttons state={this.state} />
                    <BTbuttons state={this.state} />
                    <GRAbuttons state={this.state} />
                </div>
                
            </div>
        )
    }
    
}

export default Sidebar