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
        var newNode = new Node(num)
        if (this.root === null) {
            this.root = newNode
        } else  {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){

        var root = node.num;
        var newN = newNode.num;
        if ( root > newN) {
            if (node.left === null) {
                return node.left = newNode
            } else {
                return this.insertNode(node.left, newNode)
            }
        } else if (newN > root) {
            if (node.right === null) {
                return node.right = newNode
            } else {
                return this.insertNode(node.right, newNode)
            }
        } else if (newN === root) {
            return 
        }
    }

    delete = (num) => {
        this.root = this.removeNode(this.root, num)
    }

    removeNode = (node, num) => {
        if (node === null) {
            return null
        } else if (num < node.num) {
            node.left = this.removeNode(node.left, num)
            return node 
        } else if (num > node.num) {
            node.right = this.removeNode(node.right,num)
            return node 
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node 
            }
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left 
                return node
            }

            var aux = this.findMinNode(node.right)
            node.num = aux.num
            node.right = this.removeNode(node.right, aux.num)
            return node 
        }
    }

    findMinNode(node) {
        if (node.left === null) return node
        else return this.findMinNode(node.left)
    }

    inorder(node, array) {
        if (node !== null) {
            this.inorder(node.left, array); 
            array.push(node.num)
            this.inorder(node.right, array); 
        }
    }

    preorder(node, array) {
        if (node !== null) {
            array.push(node.num)
            this.preorder(node.left, array); 
            this.preorder(node.right, array);
        }
    }
    
    postorder(node, array) { 
        if(node != null) { 
            this.postorder(node.left, array); 
            this.postorder(node.right, array); 
            array.push(node.num)
        } 
    }  

    levelorder() {
        if (this.root === null) {
            return []
        }
        let order = []
        let queue = [this.root]
        while (queue.length !== 0) {
            let check = false 
            for (var i=0; i<queue.length; i++) {
                if (queue[i] !== null) {
                    check = true 
                }
            }
            if (check === false){
                break
            }
            if (queue[0] === null) {
                order.push(null)
                queue.splice(0,1)
                queue.push(null)
                queue.push(null)
            } else {
                order.push(queue[0].num)
                let node = queue[0]

                queue.splice(0,1)

                if (node.left != null) {
                    queue.push(node.left)
                } else {
                    queue.push(null)
                }
                if (node.right != null) {
                    queue.push(node.right)
                } else {
                    queue.push(null)
                }
            }
        }
        return order

    }
    
    clear() {
        this.root = null
    }
    
    getRootNode() {
        return this.root;
    }

    render() {
        return(
            <div>

            </div>
    
        )
    }
    
}  



export default BinaryTree;