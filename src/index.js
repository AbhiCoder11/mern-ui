import {createStore} from 'redux';

//reducer function

const reducer = function(state,action){
    console.log('state,action' , state ,action);
  if(action.type == "INC"){
      return state+action.value
  }
  if(action.type == "DEC"){
    return state-action.value
 }
  return state
}

//creating store 

const store = createStore(reducer,0);

//listen to store
store.subscribe(()=>{
    //get the current state of app
    console.log('got store', store.getState());
})

//what we dispatch as an object as it is recievd by reducer function

//action must have a type b/c type is a keyword to fire actions

store.dispatch({type:"INC", value:100,data:{name:'abc'}});
store.dispatch({type:"INC", value:16});
store.dispatch({type:"DEC",value:88})