import React, { Component } from 'react'


class NewPage extends Component{
// constructor will initiaze our data first time as page runs;
    constructor(){
        super();
        this.state= {
          name:'',
          age:'',
        }
    this.handleName = this.handleName.bind(this);
    }

    handleName(e){
        this.setState({name:e.target.value},()=>{
            console.log(this.state.name)
        });
    }
    

// render is simply a function is a container that hold attributes of our markup(html)
    render(){
              // render handles all markup(html) /tags inside return
      return(
          <div>
          <h1>this will go to top</h1>
          <form>
              name
              <input type="text" value ={this.state.name} onChange={this.handleName} />
          </form>    
          </div>
      )
    }
}

export default NewPage
