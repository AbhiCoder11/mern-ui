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
   -constructor()- No
2.Mounting
   -componentWillMount- Yes ,but not a good practice
    -componentWillReceiveProps - Yes ,but not a good practice
    -shouldComponentUpdate() - return true by default. - No
    -componentWillUpdate - Yes ,but not a good practice
    -render()- No
    -componentDidUpdate();
3.UnMounting
  - componentWillUnmount();
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


      so, can I call this.setState({}) in all life-cycle methods?- No


      1.controlled vs uncontrolled components.
      

      // when this.setState() is called render is called;
       when render is called we get a new state.

       So, when you write this.setState inside render it becomes infinite loop. never never.

       -DFS 

       -checkbox and radio buttons.

       - for each DOM we have a unique state and handler and for every handler we have an event . i.e Handler function (onChange)  represent the DOM.
       - list and keys.

       {}- use to write values or dynamic dta within JSX;

       Each child in an array or iterator should have a unique "key" prop.

       we should always try to keep our render() more and more simple and clear.

       inside render return if you want to use JS functions use {this.myfunction()}

       e.target{
           value:'',
           checked:true/false,
       }

       - the onchange handler function represents the DOM.

       //refs and uncrolled events.
       - uncontrolled events dont have a handler dont have a DOM state value. they are simply stored as variable in primary memory.
       - refs should be avoided as much as possible. the good approach is we handle maintain data in DOM using state and a handler.

       -SOAP and REST - two ways to provide backend services. REST is prefeered. 
       -talking to API