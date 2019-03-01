import React, {Component} from 'react'


class Comments extends Component{

constructor(){
    super()

    this.handleSubmit= this.handleSubmit.bind(this);



}

handleSubmit(event){

    event.preventDefault();

    const comment= event.target.elements.comment.value;
      this.props.addComment(comment);
      event.target.elements.comment.value='';

}
    render(){

        return <div className='comment' >

        {
            this.props.comments.map((comments, index) => {

                return(

                    <p key={index}> {comments} </p>
                )
            }) 
        }
              <form className='comment-form'onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Comment' name='comment'/>
                <input type='submit' hidden />

              </form>

        </div>
    }
}


export default Comments