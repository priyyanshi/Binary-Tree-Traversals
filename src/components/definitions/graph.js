import { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

// class Node {
//     constructor (num) {
//         this.num = num
//         this.left = null
//         this.right = null
//     }
// }

class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newNode: [],
            nodes: [],
            id: uuidv4(),
        }
    }
}

export default Graph