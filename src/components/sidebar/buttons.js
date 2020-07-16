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

class BTbuttons extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if (this.props.state.showBT) {
            return (
                <div>
                    <input className={Styles.addNode}></input>
                    <button className={Styles.addButton}>Add Node</button><br/>
                    <button className={Styles.sideButtons}>Delete Node</button><br/>
                    <div className={Styles.dropdown}>
                        <button className={Styles.sideButtons}>Traversals</button><br/>
                        <div className={Styles.dropdownContent}>
                            <button onClick={console.log(0)}>Preoder</button>
                            <button onClick={console.log(0)}>Postorder</button>
                            <button onClick={console.log(0)}>Inorder</button>
                        </div>
                    </div>
                    <button className={Styles.sideButtons}>Clear</button><br/>
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
        this.state = {}
    }
    render() {
        if (this.props.state.showGRA) {
            return (
                <div>
                    graph
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


export {BSTbuttons, BTbuttons, GRAbuttons}