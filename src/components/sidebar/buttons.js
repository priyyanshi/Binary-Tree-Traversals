import React, { Component } from 'react'
import Styles from './sidebar.module.css'

class BSTbuttons extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        if (this.props.state.showBST) {
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