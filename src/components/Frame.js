import React, {Component} from 'react'
import SearchInput from 'react-search-input'
import Photo from "./Photo";

export default class Frame extends Component {
    render() {
        // const albums = this.props;
        return (
            <div className='row'>
                {this.props.albums.map(album => {
                    return (
                        <div key={album.album_name} className='col-xs-4'>
                            <Photo img_url={album.img_urls[0]}/>
                        </div>
                    )
                })}

                <div>
                    <input className='search-input' onChange={this.props.onUpdateSearch}/>
                </div>
            </div>
        )
    }
}