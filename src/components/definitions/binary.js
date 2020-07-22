import React,{ Component } from 'react'
import {v4 as uuidv4} from 'uuid'

class Node {
    constructor (num) {
        this.num = num
        this.left = null
        this.right = null
    }
}

class BinaryTree extends Component{
    constructor() {
        super()
        this.state = {
            id: uuidv4(),
            preorder: [],
            postorder: [],
            inorder: [],
        }
        this.root = null
    }

    insert(num) {
        
    }
    
}  



export default BinaryTree;