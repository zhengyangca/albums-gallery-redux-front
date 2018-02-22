import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Gallery from 'react-grid-gallery'


export default class Frame extends Component {

    componentWillMount() {
        console.log('hi albums = ');
        console.log(this.props.albums);
        if (this.props.albums.length === 0) {
        } else {
            this.props.onInitGalley()
        }
    }


    componentDidUpdate() {
        if (this.props.albums.length === 0) {
        } else {
            this.props.onInitGalley()
        }
    }


    render() {
        const {album_name, model_name, img_urls} = this.props;
        const prefix_domain = "http://linode.zhengyang.ca:5050/ftp/" + model_name + "/" + album_name + "/";
        const IMAGES = [];
        if (img_urls === undefined) {
            return null;
        }
        return (
            <div className='galley row'>

                <div className='album_name'>{album_name}</div>

                <Link to={'/models/' + model_name}>查看 {model_name} 的所有相册</Link>


                {img_urls.map(img_url => {
                    IMAGES.push({
                        src: prefix_domain + img_url,
                        thumbnail: prefix_domain + img_url,
                        // thumbnailHeight: 400,
                        // thumbnailWidth: 300,
                        isSelected: false,
                        caption: "After Rain (Jeshu John - designerspics.com)"
                    })
                })}

                <Gallery images={IMAGES}/>
            </div>
        )
    }
}