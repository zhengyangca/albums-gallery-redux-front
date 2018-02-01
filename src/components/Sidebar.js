import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
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
                <NavLink to='/albums'>Albums</NavLink>
                <br/>
                {albums.map(album => {
                    let album_url = '/albums/' + album.album_name;
                    return (
                        <div key={album.album_name}>
                            <NavLink activeClassName="active" to={album_url}>{album.album_name}</NavLink>
                        </div>
                    )
                })}

            </nav>
        );
    }
}