import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        const catalogues = this.props.catalogues;
        // console.log(catalogues);
        return (
            <nav className='sidebar'>
                <label>This is the sidebar</label>
                <br/>
                <div>
                    <input className='search-input' onChange={this.props.onUpdateSearch}/>
                </div>
                <br/>

                <ul className="nav-pills nav-stacked" data-spy="affix" data-offset-top="205">
                    <Link to='/'>Home</Link><br/>
                    <Link to='/albums'>All Albums</Link>
                    <br/>
                    {/*{console.log(catalogues)}*/}
                    {catalogues.map(cataItem => {
                        let model_url = '/models/' + cataItem.model_name;
                        return (
                            <div key={cataItem.model_name}>
                                <Link to={model_url}>{cataItem.model_name}</Link>
                                {cataItem.model_albums.map(model_album => {
                                    let album_url = '/albums/' + model_album;
                                    return (
                                        <div key={model_album}>
                                            <li><Link to={album_url}>{model_album}</Link></li>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </ul>

            </nav>
        );
    }
}