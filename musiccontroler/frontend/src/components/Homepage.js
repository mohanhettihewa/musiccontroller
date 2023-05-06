import React,{Component} from "react";
import Roomjoinpage from "./Roomjoinpage";
import Roomcreatepage from "./Roomcreatepage";
import{BrowserRouter as Router,Routes,Route,Link,Redirect, RouterProvider} from "react-router-dom";



export default class Homepage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<Router>

            <Routes>

                <Route exact path='/' element={<p>This is the home page</p>} />

                <Route exact path='/join' element={<Roomjoinpage />} />

                <Route exact path='/create' element={<Roomcreatepage/>} />

            </Routes>

</Router>
           

        );
    }
}