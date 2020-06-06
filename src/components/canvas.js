import React, { Component } from 'react'
import styles from './canvas.module.css'

class Sidebar extends Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <h1>hello</h1>
            </div>
        )
    }
}

class Grid extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

class Canvas extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <Grid/>
            </div>
        )
    }
}

export default Canvas;