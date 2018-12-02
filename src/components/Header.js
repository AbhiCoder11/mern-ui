import React,{Component} from 'react';

class Header extends Component{
    componentWillReceiveProps(prev,next){
        console.log(prev,next);
      }
    render(){
        console.log(this.props);
        let myProp = this.props;
        //myProp.country = 'abc';
        return(
            <div>
                <h1>React Training at Sandfox in {myProp.country}</h1>
                <p>React the most popular JS framework for developing view layer</p>
            </div>    
        );
    }
}
export default Header