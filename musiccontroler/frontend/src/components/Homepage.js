import React,{Component} from "react";
import Roomjoinpage from "./Roomjoinpage";
import Roomcreatepage from "./Roomcreatepage";
import Room from "./Room";
import{BrowserRouter as Router,Routes,Route,userNavigate,Link,Redirect, RouterProvider} from "react-router-dom";
import {Grid,Button,Typography,ButtonGroup} from "@material-ui/core";


export default class Homepage extends Component{
    constructor(props){
        super(props);
       
    }

    renderhomepage(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" compact="h3">
                        Music Controller
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" to="/join" component={Link}>
                        Join a Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" to="/create" component={Link}>
                        Create a Room
                    </Button>

                </Grid>
            </Grid>
        );
        }

    render(){
        return(<Router>
                  
            <Routes>

                <Route  path='/' element={<this.renderhomepage/>} />

                <Route  path='/join' element={<Roomjoinpage/>} />

                <Route   path='/create' element={<Roomcreatepage/>} />
                <Route  path='/room/:roomCode' element={<Room/>}/>

            </Routes>

</Router>
           

        );
    }
}