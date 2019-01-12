import React,{Component} from 'react';

 
 class Home extends Component{
    
    // componentWillMount(){
    //     console.log('hi');
    //     this.props.history.push('/about?isNext=true');
    // }

    render(){
        console.log('route props are');
        console.log(this.props)
        return(
            <h2>This is Home page</h2>
        )
    }
}

export default Home