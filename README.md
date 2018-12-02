uni-directional data flow. i.e data can be flow only from parent to child and reverse is not possible.

state is the muatable data i.e r/w both. class level or state varibales are private to class;

props is read only data. It is used to communictae between classes.props are immutable.
props will be created on JSX components.

props = {
    info:'',
    country:'',
    funcInfo: function(){
        return;
    }
}

TypeError: Cannot assign to read only property 'country' of object '#<Object>';

***React lifecycle;
1.Initialization
2.Mounting
3.UnMounting

to control and manage these life cycle we have react-libarary functions for every lifecycle.

//imp function
    1. constructor();
    2.componentDidMount()
    3.componentWillMount()
    4.componentDidUpdate()
    5.shouldComponentUpdate()
    6.componentWillUpdate();
    7.componentWillReceiveProps();

    Did - after render();
    Will - before render();


    //every time you mutate/change state of app render() is called;
      this.setState({})


      so, can I call this.setState({}) in all life-cycle methods?