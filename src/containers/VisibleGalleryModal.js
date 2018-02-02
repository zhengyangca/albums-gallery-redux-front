import {connect} from 'react-redux'
import * as actions from '../actions'
import Modal from '../components/GalleryModal'

function mapStateToProps(state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        getAll: () => dispatch(actions.getAll()),
        onUpdateSearch: event => dispatch(actions.search(event.target.value)),
    }
}

const VisibleModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default VisibleModal;