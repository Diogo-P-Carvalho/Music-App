import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Musics from '../../container/musics';
import SingleMusic from '../../container/singleMusic';
import Login from '../Login';
import Logged from '../LoggedPage';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Musics}/>
        <Route exact path="/musics/:ID" component={SingleMusic}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logged" component={Logged}/>
    </Switch>

);

export default Main;