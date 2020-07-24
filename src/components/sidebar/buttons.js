import React, { Component } from 'react'
import Styles from './sidebar.module.css'

class BSTbuttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            del: '',
        }
    }
    onChange = e => {
        this.setState({ text: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        if (parseInt(this.state.text)) {
            this.props.state.SearchTree[this.props.state.index].insert(parseInt(this.state.text))
            document.getElementById('addNode').value = null
        } else {
            console.log("Must enter a number!")
        }
    }

    treeClear = () => {
        this.props.state.SearchTree[this.props.state.index].clear()
    }

    deleteNode = e => {
        e.preventDefault();
        if (parseInt(this.state.del)) {
            let tree = this.props.state.SearchTree[this.props.state.index]
            tree.delete(parseInt(this.state.del))
            document.getElementById('deleteNode').value = null
            this.setState({del: ''})
        } else {
            console.log("Must enter a number!")
        }
    }

    deleteChange = e => {
        this.setState({ del: e.target.value })
    }

    render() {
        if (this.props.state.showBST) {
            return (
                <div>
                    <input id='addNode' onChange={(e) => this.onChange(e)} className={Styles.addNode}></input>
                    <button onClick={(e) => this.onSubmit(e)} className={Styles.addButton}>Add Node</button><br/>
                    <input id='deleteNode' onChange={(e) => this.deleteChange(e)} className={Styles.addNode}></input>
                    <button onClick={(e) => this.deleteNode(e)} className={Styles.addButton}>Delete Node</button><br/>
                    <button onClick={this.treeClear} className={Styles.sideButtons}>Clear</button><br/>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }  
}



class GRAbuttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onChange = e => {
        let newText = this.sanitize(e.target.value)

        this.setState({ text: newText })
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.props.state.go && this.isUnique(this.state.text)) {
            this.props.state.Graph[this.props.state.index].state.newNode.push(this.state.text)
            document.getElementById('addNode').value = null
            this.props.state.go = false
        }
    }

    isUnique(x) {
        let nodes = this.props.state.Graph[this.props.state.index].state.nodes
        for (let j=0; j< nodes.length; j++) {
            if (x === nodes[j]) {
                return false 
            }
        }
        return true
    }

    sanitize(s) {
        s = ( s || '' ).replace( /^\s+|\s+$/g, '' )
        return s
    }
    deleteNode() {

    }

    render() {
        if (this.props.state.showGRA) {
            return (
                <div>
                    <input id='addNode' onChange={(e) => this.onChange(e)} className={Styles.addNode}></input>
                    <button onClick={(e) => this.onSubmit(e)} className={Styles.addButton}>Add Node</button><br/>
                    <button onClick={(e) => this.deleteNode(e)} className={Styles.addButton}>Delete Node</button><br/>

                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }  
}


export {BSTbuttons, GRAbuttons}