import React from 'react';
//import List from '../../playground/List';
import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';

import {Route} from 'react-router-dom'

import Single from './Single'


class Main extends React.Component {

constructor()
{
 super()
}


   render() {

      
      return( <div>
        
       <Route exact path="/"  render= {() =>  (
            <div>
                  <Title head={'Photowall'}/>
                  <Photowall {...this.props} />
            </div>
       )}/>
       
         

       <Route path="/addphotos" render= {(history) => ( 

          <div>

            <AddPhoto {...this.props}/>

           
            
          </div>
         ) }/>

         <Route path='/Single/:id' render = {(params) => (
           <div>

              <Single  {...this.props} {...params} />

            </div> 

         ) }/>
 
    </div>
   )}

}     
 


export default Main