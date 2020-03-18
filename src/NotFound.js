import React from 'react';
import { Link, withRouter } from 'react-router-dom';



const NotFound = (props) =>{
    return(<div><h1>404:  Page not found  <Link to="/app">Go to App</Link> </h1>
    <button onClick={()=>props.history.push('/app')}>Home</button></div>
    )

}
export default withRouter(NotFound);