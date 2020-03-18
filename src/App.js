import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';
import NotFound from './NotFound';
import{
  BrowserRouter as Router,
  Switch,Route
} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    super(props);

this.state={
  title:"demo app",
  list:[]
}
}
changeTitle(event){
  this.setState({title:event.target.value});
  console.log("val",event.target.value)
}

addList(){
  this.setState({list:[...this.state.list,this.state.title],title:''})
  

}

render(){
 
  console.log("list",this.state.list);
  return (
   
    
  <div className="App">
     <Router><NotFound/></Router>
    {this.state.title}
    <input type="text" value={this.state.title} onChange={(event)=> this.changeTitle(event)}/>
    <button onClick={()=>this.addList()}>ADD</button>
    <List list={this.state.list}/>
  


  </div>
  )
}
}

export default App;
