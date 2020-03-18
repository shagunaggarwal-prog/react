import React from 'react';
import{
    BrowserRouter as Router,
    Switch,Route
} from "react-router-dom";
import App from'./App';
import NotFound from './NotFound';

export default()=>{
    return( 
        <Router>
            <NotFound/>
            <Switch>
                <Route exact={true} path="/app">
                    <App/>
                </Route>
               
                   

                
            </Switch>
        </Router>
    )
}