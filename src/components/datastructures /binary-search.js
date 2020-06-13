import React, { Component } from 'react'
import SearchTree from '../definitions/binary-search'
//import Button from 'react-bootstrap/Button';
//import TextField from '@material-ui/core/TextField';



class Search extends Component {
    state = {
        tree: new SearchTree(),
        ID: '', 
        inorder: [],
        preorder: [],
        postorder: [],
    }

    onChange = e => {
        this.setState({ ID: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        if (parseInt(this.state.ID)) {
            this.state.tree.insert(parseInt(this.state.ID));
        } else {
            console.log("Must enter a number!")
        }
    }

    doInorder = (e) => {
        e.preventDefault();
        var array = [];
        this.state.tree.inorder(this.state.tree.root, array)
        this.setState({inorder : array})
    }

    doPreorder = (e) => {
        e.preventDefault();
        var array = [];
        this.state.tree.preorder(this.state.tree.root, array)
        this.setState({preorder: array})
    }

    doPostorder = (e) => {
        e.preventDefault();
        var array = [];
        this.state.tree.postorder(this.state.tree.root, array)        
        this.setState({postorder: array})
    }

    createInorder = () => {
        let table = []

        for (let i = 0; i < 33; i++) {
            table.push(<th class="children">{this.state.inorder[i]}</th>)
        }
        return table
    }

    createPreorder = () => {
        let table = []

        for (let i = 0; i < 33; i++) {
            table.push(<th class="children">{this.state.preorder[i]}</th>)
        }
        return table
    }

    createPostorder = () => {
        let table = []

        for (let i = 0; i < 33; i++) {
            table.push(<th style={{margin: 5}} class="children">{this.state.postorder[i]}</th>)
        }
        return table
    }

    createTree = () => {
        let table = []
        for (let i = 0; i < 33; i++) {
            for (let j = 0; j < 13; j++) {
            }
        }
        return table
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}



// class Form extends Component {
//     state = {
//         tree: new BinaryTree(),
//         ID: '', 
//         inorder: [],
//         preorder: [],
//         postorder: [],
//     }

//     onChange = e => {
//         this.setState({ ID: e.target.value });
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         if (parseInt(this.state.ID)) {
//             this.state.tree.insert(parseInt(this.state.ID));
//         } else {
//             console.log("Must enter a number!")
//         }
//     }

//     doInorder = (e) => {
//         e.preventDefault();
//         var array = [];
//         this.state.tree.inorder(this.state.tree.root, array)
//         this.setState({inorder : array})
//     }

//     doPreorder = (e) => {
//         e.preventDefault();
//         var array = [];
//         this.state.tree.preorder(this.state.tree.root, array)
//         this.setState({preorder: array})
//     }

//     doPostorder = (e) => {
//         e.preventDefault();
//         var array = [];
//         this.state.tree.postorder(this.state.tree.root, array)        
//         this.setState({postorder: array})
//     }

//     createInorder = () => {
//         let table = []

//         for (let i = 0; i < 33; i++) {
//             table.push(<th class="children">{this.state.inorder[i]}</th>)
//         }
//         return table
//     }

//     createPreorder = () => {
//         let table = []

//         for (let i = 0; i < 33; i++) {
//             table.push(<th class="children">{this.state.preorder[i]}</th>)
//         }
//         return table
//     }

//     createPostorder = () => {
//         let table = []

//         for (let i = 0; i < 33; i++) {
//             table.push(<th style={{margin: 5}} class="children">{this.state.postorder[i]}</th>)
//         }
//         return table
//     }

//     createTree = () => {
//         let table = []
//         for (let i = 0; i < 33; i++) {
//             for (let j = 0; j < 13; j++) {
//             }
//         }
//         return table
//     }

//     render() {
//         return (
//             <div>
//                 <style type="text/css">
//                         {`
//                         .btn-flat {
//                         background-color: black;
//                         color: white;
//                         margin-left: 25px;
//                         margin-top: 10px;
//                         font-size: 1.5rem;
//                         }
                       
//                         .btn-red {
//                             background-color: #800000;
//                             color: white;
//                             margin-left: 25px;
//                             margin-top: 10px;
//                             font-size: 1.5rem;
//                             margin-left: 50px;
//                             margin-right: 60px;

//                             }

//                         .btn-xxl {
//                         padding: 1rem 1.5rem;
//                         font-size: 1.5rem;
//                         }

//                         .h4 {
//                             margin-left: 15px;
//                             margin-right: 5px;
//                         }
//                         .td {
//                             text-align: center;
//                         }
//                         .td-s {
//                             padding-left: 40px;
//                             padding-right: 40px;
//                         }

//                         .h1 {
//                             font-size: 4.5rem;
//                             text-decoration: underline;
//                         }

//                         .input {
//                             margin-top: 50px;
//                         }

//                         `}
//                 </style>

//                 <div align="center"> 
//                     <h1 class="h1">BINARY TREE TRAVERSALS </h1>
//                 </div>
//                 <div class="input">
//                     <Button variant="red" onClick={(e) => this.onSubmit(e)}> Add Node </Button>
//                     <TextField  id="filled-basic"  name = "ID" value={this.state.ID} onChange={(e) => this.onChange(e)} label=" " />
//                 </div>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <table>
//                     <tr>
//                         <td class="td"><Button variant="flat" color="primary" onClick={(e) => this.doInorder(e)}> Inorder Traversal</Button></td>
//                         <td class="td-s">{this.createInorder()}</td>                        
//                     </tr>
//                     <br></br>
//                     <tr>
//                         <td class="td"><Button variant="flat" color="secondary" onClick={(e) => this.doPreorder(e)}> Preorder Traversal</Button></td>
//                         <td class="td-s">{this.createPreorder()}</td>
//                     </tr>
//                     <br></br>
//                     <tr>
//                         <td class="td"><Button variant="flat" onClick={(e) => this.doPostorder(e)}> Postorder Traversal</Button></td>
//                         <td class="td-s">{this.createPostorder()}</td>
//                     </tr>

//                 </table>
//             </div>
//         )
//     }
// }



export default Search;