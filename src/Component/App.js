import {connect} from 'react-redux'
import Main from './Main';
import {bindActionCreators} from 'redux'


import * as Action from '../redux/Action'
import {withRouter} from 'react-router'


function maptheState(state){

    return {
        posts:state.posts,
        comments:state.comments


     }
}


function mapDispatchToProps(dispatch)
{
  return bindActionCreators(Action, dispatch)
}



const App = withRouter(connect(maptheState, mapDispatchToProps)(Main))

export default App