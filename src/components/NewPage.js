import React, { Component } from 'react'


class NewPage extends Component{
// constructor will initiaze our data first time as page runs;
    constructor(){
        super();
        this.state= {
          name:'',
          age:'',
          description:'',
          file:'',
        }
    this.handleName = this.handleName.bind(this);
    this.getFormData = this.getFormData.bind(this);
    }

    handleName(e){
        this.setState({name:e.target.value},()=>{
            console.log(this.state.name)
        });
    }
    handleAge(e){
      this.setState({age:e.target.value});
    }

    handleDescription(e){
      this.setState({description:e.target.value});
    }
    uploadFile(e){
        console.log(e.target.files[0]);
        //this.setState({file:e.target.files[0]})
        var formData = new FormData();
        var forAPi = formData.append('file',e.target.files[0]);
        console.log(forAPi);
    }
    
    getFormData(e){
        console.log('got form dta');
        console.log(this.state);
        e.preventDefault();
    }

    render(){
    console.log(this.props);

      return(
          <div>
          <h1>this {this.props.name} will go to top</h1>
          <form onSubmit = {this.getFormData}>
              name
              <input type="text" value ={this.state.name} onChange={this.handleName} /><br></br>
              age
              <input type="text" value ={this.state.age} onChange={this.handleAge.bind(this)} /><br></br>
              description
              <textarea value={this.state.description} onChange= {this.handleDescription.bind(this)}></textarea><br></br>
              Upload File:
              <input type="file" value ={this.state.file} onChange={this.uploadFile} /><br></br>
              <button onClick= {this.getFormData}>Save</button>

          </form>    
          </div>
      )
    }
}

export default NewPage
