import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Photo from "./Photo";

export default class Frame extends Component {
    render() {
        // const albums = this.props;
        return (
            <div className='frame row'>
                {this.props.albums.map(album => {
                    let img_fpath = "http://linode.zhengyang.ca:5050/ftp/" + album.model_name +
                        "/" + album.album_name + "/" + album.img_urls[0];
                    return (
                        <div key={album.album_name} className='col-xs-3'>
                            <Link to={'/models/' + album.model_name}>{album.model_name}</Link>
                            <Link to={'/albums/' + album.album_name}><Photo img_url={img_fpath}/>
                                <div className='model_name'>{album.album_name}</div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}