import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        const albums = this.props.albums;
        return (
            <nav className='sidebar'>
                <label>This is the sidebar</label>
                <br/>
                <div>
                    <input className='search-input' onChange={this.props.onUpdateSearch}/>
                </div>
                <br/>

                <ul class="nav-pills nav-stacked" data-spy="affix" data-offset-top="205">
                    <Link to='/albums'>Albums</Link>
                    <br/>
                    {albums.map(album => {
                        let album_url = '/albums/' + album.album_name;
                        return (
                            <div key={album.album_name}>
                                <li><Link to={album_url}>{album.album_name}</Link></li>
                            </div>
                        )
                    })}
                </ul>

            </nav>
        );
    }
}