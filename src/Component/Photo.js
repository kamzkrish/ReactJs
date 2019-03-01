import React from 'react';
import PropTypes from 'prop-types';
import {Link, route} from 'react-router-dom';

function Photo(props)
{
  
      
      const post = props.post
      return <div>
      
     
    

      <figure className= 'figure'>   
      <Link to={`Single/${post.id}`}>
      <img className="photo" src={post.imageLink} alt={post.description}/>

      </Link>
    
        <figcaption> <p> {post.description}</p></figcaption>

        <button className='button' onClick = {()=>{
              
             props.removePost(props.index)
        }}> Remove </button>


        <div className = 'buttoncontainer'>
        
        </div>
  

       </figure>
     
       </div>
}


   Photo.propTypes = {

      post: PropTypes.object.isRequired,
     
    
    }

// class Photo extends Component{
//     render()  {
      
//           const post = this.props.post
//           return <figure className= 'figure'>

//           <img className="photo" src={post.imageLink} alt={post.description}/>
//             <figcaption> <p> {post.description}</p></figcaption>
//             <button className='button'> Remove </button>
//           </figure>
      
      
//     }
//  }


export default Photo

