class Node {
    constructor (num) {
        this.num = num
        this.left = null
        this.right = null
    }
}
class BinaryTree {
    constructor() {
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

    insertNode(node, newNode) {
        var root = node.num;
        var newN = newNode.num;
        if ( root > newN) {
            console.log("left")
            if (node.left === null) {
                return node.left = newNode
            } else {
                return this.insertNode(node.left, newNode)
            }
        } else if (newN > root) {
            console.log("right")
            if (node.right === null) {
                return node.right = newNode
            } else {
                return this.insertNode(node.right, newNode)
            }
        } else if (newN === root) {
            return 
        }
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
    
    getRootNode() {
        return this.root;
    }
    
}  

export default BinaryTree;