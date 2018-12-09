import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={
            testArr:[
                {
                    id:1,
                    name:'abc'
                },
                {
                    id:2,
                    name:'xyz'
                },
                {
                    id:3,
                    name:'qwe'
                },
                {
                    id:4,
                    name:'pqr'
                }
            ]
        }
    }
    getList(){
        return this.state.testArr.map(item => <li key={item.id}>{item.name}</li>)
    }
    
   getName(){
       console.log(this.name.value);
   }

    render(){
        console.log(this.props);
        let myProp = this.props;
        const {testArr} = this.state //ES6 desctruct const testArr = this.state.testarr
        //myProp.country = 'abc';
        return(
            <div>
                <h1>React Training at Sandfox in {myProp.country}</h1>
                <p>React the most popular JS framework for developing view layer</p>
                <input type="text" ref={name => this.name = name}/>
                <button onClick={this.getName.bind(this)}>Click now</button>
                <ul>
                   {this.getList()}
                </ul>   
            </div>    
        );
    }
}
export default Header