import React,{Component} from 'react';

class List extends Component{

    render(){
      return <ol>
         { this.props.arr.map((arr, index) => <li  key ={index}> {arr}</li> )}
              
        </ol>
        
      
    }
  }


  export default List;