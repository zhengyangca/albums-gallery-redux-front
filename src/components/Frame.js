import React, {Component} from 'react'
import SearchInput from 'react-search-input'
import Photo from "./Photo";

export default class Frame extends Component {
    render() {
        // const albums = this.props;
        return (
            <div className='frame row'>
                {this.props.albums.map(album => {
                    let img_fpath = "http://albums.zhengyang.ca/" + album.model_name +
                        "/" + album.album_name + "/" + album.img_urls[100];
                    return (
                        <div key={album.album_name} className='col-xs-3'>
                            <div className='album_name'>{album.album_name}</div>
                            <div><Photo img_url={img_fpath}/></div>
                            <div className='model_name'>{album.model_name}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}