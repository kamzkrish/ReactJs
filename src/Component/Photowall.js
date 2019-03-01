import React from 'react';
import Photo from './Photo';

import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

function Photowall(props){


  return <div>

  
   <Link to="addphotos"  className='plusButton'> Add photos
   
    </Link>
       {/* <AddPhoto onPlusButton = {props.onPlusButton}/>  */}
  
         <div className='photoGrid'>
      
  
              {props.posts.map( (post, index) => <Photo key={index} post={post}  {...props} index={index} />) }

  
         </div>
</div>

}



// class Photowall extends Component {
//     render(){
//       return  <div className='photoGrid'>
  
//         {this.props.posts.map( (post, index) => <Photo key={index} post={post} />) }
  
          
//       </div>
  
      
//     }
//   }

 export default Photowall


 