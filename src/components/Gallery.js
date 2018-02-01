import React, {Component} from 'react'
import Photo from "./Photo";
import {Route, Switch} from 'react-router-dom'


export default class Frame extends Component {

    componentDidUpdate() {
        this.props.initGallery();
    }

    render() {
        const {album_name, model_name, img_urls} = this.props;
        return (
            <div className='galley row'>

                <div className='album_name'>{album_name}</div>
                <div className='model_name'>{model_name}</div>

                {img_urls.map(img_url => {
                    let img_fpath = "http://albums.zhengyang.ca/" + model_name +
                        "/" + album_name + "/" + img_url;
                    return (
                        <div key={img_url} className='col-xs-3'>
                            <div><Photo img_url={img_fpath}/></div>
                            <div className='model_name'>{img_url}</div>
                        </div>
                    )
                })}

            </div>
        )
    }
}