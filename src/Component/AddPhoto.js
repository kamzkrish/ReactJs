import React,{Component} from 'react';
import {Link} from 'react-router-dom';


class AddPhoto extends Component {

  constructor(){
    super()
    
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event){
     
      event.preventDefault();  

       const description = event.target.elements.description.value;
       const link = event.target.elements.link.value;


      const post= {  
           id: 0,
           description :description ,
           link : link 
        }
      
      if(description && link)
      {
         this.props.startAddingPost(post)
         this.props.history.push('/')
          
        
      }
  }

  render() {
    return ( 
     <div>   
       <h1> This is page 2 </h1>




          <Link to='/'   className='plusButton'> Go to home </Link> 
            <div className='inputdata'>
             <form onSubmit={this.handleSubmit} className='textin'>
                 <input type= 'text'  placeholder='Enter Link Here' name="link"/>
                 <input type='text'  placeholder ='Enter Description' name="description"/>  
                 <button className='but'> Post </button>  
                 
             </form>
           </div>
     </div>

    )

    }
}




export default AddPhoto