import React, { Component } from 'react';
import axios from 'axios';


class NewPage extends Component{
// constructor will initiaze our data first time as page runs;
    constructor(){
        super();
        this.state= {
          name:'',
          age:'',
          description:'',
          file:'',
          city:'',
          chkArr:[],
          stayOpen:true,
          cityArr:[
              {
                  id:1,
                  name:'Noida'
              },
              {
                id:2,
                name:'Gurugram'
            },
            {
                id:3,
                name:'Banglore'
            },
            {
                id:4,
                name:'Hyderabad'
            },
            {
                id:5,
                name:'Coimbtore'
            }
          ]
        }
    this.handleName = this.handleName.bind(this);
    this.getFormData = this.getFormData.bind(this);
    }
  //API call will be handled in didmount and axios is preferred
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts') // get a resource 
            .then(res =>{
                console.log('dta from api')
                console.log(res)
            } ) // then is a kind of promise
            .catch(err => console.log(err));
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

    getCity(e){
        console.log(e.target.value);
        this.setState({city:e.target.value})
    }
    
    getFormData(e){
        console.log('got form dta');
        console.log(this.refs.lname);
        console.log(this.state);
        e.preventDefault();
    }

    drawCities(){
        const {cityArr} = this.state;

       return cityArr.map((item,i) => <option key={i+1} value = {item.id}>{item.name}</option> )
    }

    getCheckBoxValue(e){
        console.log(e.target.value);
        this.state.chkArr.push(e.target.value);
    }

    allowUpdate(e){
        console.log(e.target.checked);
        this.setState({stayOpen:e.target.checked})
    }

    getRadio(e){

    }

    getLname(){}

    render(){
    console.log(this.props);

      return(
          <div>
          <h1>this {this.props.name} will go to top</h1>
          <form onSubmit = {this.getFormData}>
              First name
              <input type="text" value ={this.state.name} onChange={this.handleName} /><br></br>
              <br></br>
              age
              <input type="text" value ={this.state.age} onChange={this.handleAge.bind(this)} /><br></br>
              description
              <textarea value={this.state.description} onChange= {this.handleDescription.bind(this)}></textarea><br></br>
              Upload File:
              <input type="file"  onChange={this.uploadFile} /><br></br>
              city:
              <select  onChange={this.getCity.bind(this)}>
                  <option value = "">--Select City--</option>
                   {this.drawCities()}
               </select> 
               <br></br>
               Hobbies:
                Reading
               <input type ="checkbox" value="reading" onChange={this.getCheckBoxValue.bind(this)}/> 
               Running
               <input type ="checkbox" value="running" onChange={this.getCheckBoxValue.bind(this)}/> 
               Playing
               <input type ="checkbox" value="playing" onChange={this.getCheckBoxValue.bind(this)}/> 
               Skyviewing
               <input type ="checkbox" value="skyviewing" onChange={this.getCheckBoxValue.bind(this)}/> 
               <br></br> 
               Update check in time:
               <input type ="checkbox"  value= {this.state.stayOpen} checked={this.state.stayOpen} onChange={this.allowUpdate.bind(this)}/> 
               Age Group:
               <input type ="radio" value= {this.state.ageGroup}  onChange={this.getRadio.bind(this)}/> 


              <button onClick= {this.getFormData}>Save</button>
               
          </form>  
            
          </div>
      )
    }
}

export default NewPage
