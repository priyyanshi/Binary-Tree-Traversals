import React, { Component } from 'react'
import Styles from './sidebar.module.css'
import Search from '../datastructures/binary-search'
import Display from '../canvas/display'



function EachPage(props) {

    return (
        <div>
            <button onClick={()=> props.handleDisplay(props)} className={Styles.eachPage}>
                {props.type} {props.val}
            </button>
        </div>
    ) 
}

class Pages extends Component {

    constructor() {
        super()
        this.state = { 
            SearchTree: [], 
            BinaryTree: [], 
            Graph: [],
            Display: []
        }
        this.addSearchTree = this.addSearchTree.bind(this)
        this.addBinaryTree = this.addBinaryTree.bind(this)
        this.addGraph = this.addGraph.bind(this)
        this.handleDisplay = this.handleDisplay.bind(this)
    }

    handleDisplay(props) {
        this.setState({Display : [props.type,props.val]})
        console.log(this.state.Display)
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
        var BinaryComponents = this.state.BinaryTree.map(tree => <EachPage type="Binary Tree" key={tree.state.id} val={two++} handleDisplay={this.handleDisplay}/>)
        var GraphComponents = this.state.Graph.map(tree => <EachPage type="Graph" key={tree.state.id} val={three++} handleDisplay={this.handleDisplay}/>)

        return (
            <div>
                
                <div className={Styles.dropdown}>
                    <button className={Styles.dropbtn}>+ Pages</button>
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
                
            </div>
        )
    }
    
}

export default Pages