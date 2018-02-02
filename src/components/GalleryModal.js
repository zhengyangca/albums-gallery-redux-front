import React, {Component} from 'react'


export default class Modal extends Component {
    render() {
        return (
            <div className="modal fade" id="galleryModal" role="dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <label>Hi Modal</label>
                    </div>
                </div>
            </div>
        )
    }
}