import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import VisibleFrame from "../containers/VisibleFrame";
import VisibleCounter from '../containers/VisibleCounter';
import VisibleGallery from "../containers/VisibleGallery";

export default class Main extends Component {

    // componentWillReceiveProps(nextProps){
    //     const skuId = nextProps.match.params.name;
    //     this.setState({
    //         skuId
    //     },()=>{
    //         this.fetchGoodsInfo();
    //     });
    // }

    render() {
        return (
            <Switch>
                <Route path='/albums/:name' render={(props) => (
                    <VisibleGallery album2see={props.match.params.name}/>
                )}/>

                <Route path='/albums' render={() => (
                    <VisibleFrame/>
                )}/>

                <Route path='/' render={() => (
                    <VisibleCounter/>
                )}/>
            </Switch>
        );
    }
}