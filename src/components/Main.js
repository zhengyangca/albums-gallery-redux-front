import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import VisibleFrame from "../containers/VisibleFrame";
import VisibleCounter from '../containers/VisibleCounter';
import VisibleGallery from "../containers/VisibleGallery";

export default class Main extends Component {

    render() {
        return (
            <Switch>
                <Route path='/albums/:name' render={(props) => (
                    <VisibleGallery album2see={props.match.params.name}/>
                )}/>

                <Route path='/models/:model_name' render={(props) => (
                    <VisibleFrame model_name={props.match.params.model_name}/>
                )}/>

                <Route path='/albums' render={() => (
                    <VisibleFrame/>
                )}/>

                <Route exact path='/' render={() => (
                    <VisibleCounter/>
                )}/>
            </Switch>
        );
    }
}