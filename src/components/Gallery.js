import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Gallery from 'react-grid-gallery'


export default class Frame extends Component {

    componentWillMount() {
        this.props.onInitGalley()
    }

    componentDidUpdate() {
        this.props.onInitGalley()
    }


    render() {
        const {album_name, model_name, img_urls} = this.props;
        const prefix_domain = "http://albums.zhengyang.ca/" + model_name + "/" + album_name + "/";
        const IMAGES = [];

        return (
            <div className='galley row'>

                <div className='album_name'>{album_name}</div>

                <Link to={'/models/' + model_name}>查看 {model_name} 的所有相册</Link>


                {img_urls.map(img_url => {
                    IMAGES.push({
                        src: prefix_domain + img_url,
                        thumbnail: prefix_domain + img_url,
                        isSelected: false,
                        caption: "After Rain (Jeshu John - designerspics.com)"
                    })
                })}

                <Gallery images={IMAGES}/>
            </div>
        )
    }
}